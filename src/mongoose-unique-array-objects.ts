import * as dotProp from 'dot-prop'

import { Document, HookNextFunction, Schema, SchemaType, SchemaTypeOpts } from 'mongoose'
import { isArray, uniqBy } from 'lodash'

export function uniqueArrayObjectsPlugin(schema: Schema) {
  schema.pre('save', function(next: HookNextFunction) {
    const doc = this as Document
    schema.eachPath((pathName: string, type: SchemaType) => {
      const schemaType = type as SchemaType & { options: SchemaTypeOpts<any> & { uniqueByKey: { keyName: string } } }
      if (schemaType.options.uniqueByKey && schemaType.options.uniqueByKey.keyName) {
        const value = dotProp.get(doc.toJSON(), pathName)
        if (isArray(value)) {
          const uniqueResults = uniqBy(value, schemaType.options.uniqueByKey.keyName)
          dotProp.set(doc, pathName, uniqueResults)
        }
      }
    })
    next()
  })
}
