const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');


  // deleteMany

  // db.collection('Todos').deleteMany({name: 'up'}).then((data) => {
  //   console.log(data);
  // })

  // deleteOne

  // db.collection('Todos').deleteOne({
  //   name: 'ops'
  // }).then((data) => {
  //   console.log(data);
  // })

  // findOneAndDelete

  db.collection('Todos').findOneAndDelete({
    _id: new ObjectId('5c03a8be93a278a8b0be5691')
  }).then((data) => {
    console.log(data)
  })

  // db.close();
});
