const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');


  db.collection('Todos').find().toArray().then((data)=>{
    console.log(JSON.stringify(data, undefined, 2));
  }, (err) => {
    console.log(err);
  })

  // db.close();
});
