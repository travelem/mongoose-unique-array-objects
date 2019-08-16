import { Document, HookNextFunction, Schema, SchemaType, SchemaTypeOpts } from 'mongoose'

import { uniqBy } from 'lodash'

/** Make path only contains unique keys*/
export function uniqueArrayObjectsPlugin(schema: Schema) {
  schema.pre('save', function(next: HookNextFunction) {
    const doc = this as Document
    schema.eachPath((pathName: string) => {
      const pathData = schema.path(pathName) as SchemaType & {
        options: SchemaTypeOpts<any> & { uniqueKeys: boolean }
      }
      if (pathData.options.uniqueByKey && pathData.options.uniqueByKey.keyName) {
        doc[pathName] = uniqBy(doc[pathName], pathData.options.uniqueByKey.keyName)
      }
    })
    next()
  })
}
