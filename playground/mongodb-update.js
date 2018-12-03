const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');

  const nama = '5c03a8b693a278a8b0be568b';
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId(nama)
  },
  {
    $set: {
      name: 'nyx'
    }
  },
  {
    returnOriginal: false
  }).then((data) => {
    console.log(data);
  })

  // db.close();
});
