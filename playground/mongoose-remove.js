const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');


// Todo.remove({}).then((data) => {
//   console.log(data);
// });

Todo.findByIdAndRemove('5c079e6412ebd5a74c5515c7').then((data) => {
  console.log(data);
});
