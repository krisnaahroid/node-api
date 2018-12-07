require('./config/config');

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo}     = require('./models/todo.js');
var {User}     = require('./models/user.js');

var app = new express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((data) => {
    res.send(data)
  }, (err) => {
    res.send(err);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (err) => {
    res.send(err);
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((data) => {
    if (!data) {
      return res.status(404).send();
    }

    res.send(data);
  }).catch((e) => {
    res.status(404).send();
  })

})

app.delete('/todos/:id', (req, res) => {
  // get id

  var id = req.params.id;

  // validate id

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((data) => {
    if(!data){
      return res.status(404).send();
    }

    res.send(data);
  }).catch((err) => {
    res.status(400).send();
  });

  // remove by id


});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'status']);

  if(!ObjectId.isValid(id)){
    res.status(404).send();
  }

  Todo.findByIdAndUpdate(id, {
    $set: body
  },
   {
     new: true
   }).then((data) => {
     if(!data){
       return res.status(404).send();
     }

     res.send({data});

   }, (err) => {
     res.status(400).end();
   })
})

//  POST /users

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then((user) => {
    res.send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  })
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
