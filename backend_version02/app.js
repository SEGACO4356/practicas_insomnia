var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express()
.use(cors({credentials: true, origin: 'http://localhost:4200'
}))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true })); 


app.post('/register',  (req, res) => {
  return res.status(200).json({"Status": "ok registrado"});
});


app.listen(10101, function () {
  console.log('Example app listening on port 10101!');
});
