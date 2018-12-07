const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 28
}

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);

// var message = 'i am user number 28';
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(`Message is ${hash}`);
//
//
// var data = {
//   id: 28
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data + 'somesecret')).toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// //
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// }else{
//   console.log('Data was changed. DO not trust');
// }
