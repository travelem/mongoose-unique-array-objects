# mongoose-unique-array-objects

Mongoose plugin that ensures array objects are unique by the specified object key

## Purpose of this Mongoose plugin

With this Mongoose plugin you can filter out duplicate array object elements in your schema while creating new documents making sure all objects in the array are unique by the object key you specify.

## How to use

1. Install the module

```
yarn add mongoose-unique-array-objects
```

2. Import plugin

```
import mongooseUniqueArrayObjectsPlugin from 'mongoose-unique-array-objects'
```

3. Define your **array of objects** type in Mongoose schema and configure the **uniqueByKey** option object with the **keyName** value in your schema type definition:

```
# schema type definition
const mySchema = new Schema({
  mySchemaArrayType: {
    uniqueByKey: { keyName: 'your_keyname' }
    type: [{
      lang: String
      value: String
    }]
  }
})
```

4. Initialize the plugin

```
mySchema.plugin(mongooseUniqueArrayObjectsPlugin)
```

From now on array objects will be unique by the given key.