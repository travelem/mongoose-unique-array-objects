# mongoose-unique-array-objects

Mongoose plugin that ensures array objects are unique by the specified object key

## Purpose of this Mongoose plugin

With this Mongoose plugin you can filter out duplicate array objects in your model when **saving** new documents.
You can specify the object key by which object uniqueness is checked.

## How to use

Install the module:

```
yarn add mongoose-unique-array-objects
```

Import the plugin:

```
import mongooseUniqueArrayObjectsPlugin from 'mongoose-unique-array-objects'
```

Define your **array of objects** type in the Mongoose schema and configure the **uniqueByKey** option object with the **keyName** value in your schema type definition. The plugin will check the uniqueness of the objects based on this key name:

```
# schema type definition
const mySchema = new Schema({
  mySchemaArrayType: {
    uniqueByKey: { keyName: 'lang' }
    type: [{
      lang: String
      value: String
    }]
  }
})
```

In the example above only unique **lang** keys will be preserved. Other objects will be silently ignored and excluded from **save** operation.

Load the plugin:

```
mySchema.plugin(mongooseUniqueArrayObjectsPlugin)
```

From now on array objects will be unique by the given key.

## Our sponsor

This module is sponsored by https://travelem.com - travel the World with travelem
