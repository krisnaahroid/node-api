const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

var id = '5c03fbbdc66d4dd40ea2f596';

if (!ObjectId.isValid(id)) {
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log(todo);
// });


// User.findById('5c03fbbdc66d4dd40ea2f595').then((data) => {
//   if (!User) {
//     return console.log('Unable to find user');
//   }
//
//   console.log(JSON.stringify(data, undefined, 2));
// }, (err) => {
//   console.log(err);
// })
