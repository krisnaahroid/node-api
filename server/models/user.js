var mongoose  = require('mongoose');
var validator = require('validator');
// {
//   email: 'ahroidlife@gmail.com',
//   password: 'ka12345'
//   tokens: [{
//     access: 'auth',
//     token: 'kakakklmmljhfnalkaclkm'
//   }]
// }

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
})


module.exports = {User}
