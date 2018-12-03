const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   name: 'ahroidlife',
  //   status: true
  // }, (err, data) => {
  //   if(err){
  //     return console.log(err);
  //   }
  //
  //   console.log(JSON.stringify(data.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'krisna ahroid',
  //   age : 19,
  //   status: true
  // }, (err, data) => {
  //   if(err) throw err;
  //
  //   console.log(data.ops);
  // });

  db.close();
});
