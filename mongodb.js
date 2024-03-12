/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'NEW_DATABASE_NAME';
const collection = 'NEW_COLLECTION_NAME';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/


db.createCollection('users');

db.users.insertOne(
    {
        nombre: "camilo",
        apellido: "manco"
    }
);
db.users.insertOne(
    {
        nombre: "cristian",
        apellido: "correa"
    }
);
db.users.insertOne(
    {
        nombre: "miguel",
        apellido: "tabares"
    }
);

db.users.find();

db.users.updateOne(
    { _id: ObjectId('65e5d95a35adb2228944f76f')},
    { $set:{
        nombre : "cristian manco"
    }}

);

db.users.deleteOne({
    _id: ObjectId('65e5d95a35adb2228944f76f')
});


db.users.insertMany([
    {
        nombre: "juan",
        apellido: "tabares"
    },
    {
        nombre: "robinson",
        apellido: "tabares"
    },
    {
        nombre: "estela",
        apellido: "tabares"
    },
    {
        nombre: "julian",
        apellido: "tabares"
    },
    {
        nombre: "samuel",
        apellido: "tabares"
    }
]);
db.users.find();

db.users.updateMany({}, {$set: {apellido: 'valdez'}});


// solucion actividad


// 1. Listado de todos los usuarios con solo los nombres, apellidos y edad, que tengan 20 años de edad.
db.users.find({age: 20}, {name: 1, lastname: 1, age: 1});

// 2. Listado de todas las mujeres en la base de datos que tengan entre 20 y 30 años de edad.
db.users.find({gender: "female", age: {$gte: 20, $lte: 30}});

// 3. Quién es la persona con menos edad de la base de datos.
db.users.find().sort({age: 1}).limit(1);

// 4. Cuantos usuarios hay registrados en la base de datos.
db.users.count();

// 5. Traer los 5 primeros usuarios de la base de datos
db.users.find().limit(5);

// 6. Traer los 10 últimos usuarios de la base de datos
db.users.find().sort({_id: -1}).limit(10);

// 7. Listar usuarios que su correo finalice en .net
db.users.find({email: /.net$/});

// 8. Listar usuarios no vivan en  colombia.
db.users.find({country: {$ne: "colombia"}});

// 9. Listar usuarios que no vivan en ecuador y panamá.
db.users.find({country: {$nin: ["ecuador", "panamá"]}});

// 10. Cuantos(numero) usuarios son de colombia y les gusta el rock.
db.users.count({country: "colombia", music_genre: "rock"});

// 11. Actualizar el género musical de todos los usuarios de la base de datos de "metal" a "carranga".
db.users.updateMany({music_genre: "metal"}, {$set: {music_genre: "carranga"}});

// 12. Listado de hombres que les guste la "carranga" sean de colombia y tengan entre 10 y 20 años de edad.
db.users.find({gender: "male", music_genre: "carranga", country: "colombia", age: {$gte: 10, $lte: 20}});

// 13. Actualizar a todos los usuarios que tengan 99 años, su nuevo género musical favorito será la "carranga"
db.users.updateMany({age: 99}, {$set: {music_genre: "carranga"}});

// 14. Listar todos los usuarios que su nombre inicie con "a","A"
db.users.find({name: /^a/i});

// 15. Listar todos los usuarios que su apellido finalice en "z","Z"
db.users.find({lastname: /z$/i});

// 16. Actualizar los usuarios que tengan 50 años de edad su nuevo género musical será NULL
db.users.updateMany({age: 50}, {$set: {music_genre: null}});

// 17. Listar todos los usuarios que su género musical sea igual a NULL
db.users.find({music_genre: null});

// 18. Cual es el resultado de la suma de todas las edades de la base de datos.
db.users.aggregate([{ $group: { _id: null, total: { $sum: "$age" }}}]);

// 19. Cuantos usuarios tenemos registrados de "ecuador"
db.users.count({country: "ecuador"});

// 20. Cuántos usuarios son de Colombia y les gusta el vallenato.
db.users.count({country: "colombia", music_genre: "vallenato"});


// v6ZWgy5WkuGWDl5P

// v6ZWgy5WkuGWDl5P