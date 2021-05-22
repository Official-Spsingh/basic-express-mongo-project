const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express();
const port = process.env.port || 5000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
let User = require('./userData.model');
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// });
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('Mongoose database connection established successfully')
// })
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
mongoose.connect(uri, connectionParams)
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })

app.get('/', function (req, res) {
  res.send('Please enter a route');
});
app.get('/home', function (req, res) {
  res.send('Welcome home !!!');
});
app.post('/addData', function (req, res) {
  const name = req.body.name;
  const address = req.body.address;
  const obj = { status: 200, message: 'Added successfully!!!' }
  const newUser = new User({
    name,
    address
  });

  newUser.save()
    .then(() => res.send(obj))
    .catch(err => res.status(400).json('Error: ' + err));
});
app.get('/getData', function (req, res) {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});