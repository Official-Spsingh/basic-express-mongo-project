var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Please enter a route');
});
app.get('/home', function (req, res) {
    res.send('Welcome home !!!');
  });
app.post('/getData', function (req, res) {
    console.log(req.body)
    let obj=req.body
    obj.test="testing success"
    res.send(obj);
  });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});