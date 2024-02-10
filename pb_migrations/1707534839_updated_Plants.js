/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m04se658h3mbc79")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n4vshdyr",
    "name": "num_days",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m04se658h3mbc79")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n4vshdyr",
    "name": "num_weeks",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
