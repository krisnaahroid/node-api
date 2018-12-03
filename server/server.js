var express    = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo}     = require('./models/todo.js');
var {User}     = require('./models/user.js');

var app = new express();

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

app.listen(3000, () => {
  console.log('Started on port 3000');
});
