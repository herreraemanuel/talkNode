var express = require('express')
var app = express()
var obj = require('../B_modules/obj');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/json', function (req, res) {
  res.json(obj);
})

app.get('/saludar/:nombre', function(req, res) {
	res.send('Hola ' + req.param('nombre'));
});

app.get('/saludar', function(req, res) {
	// res.send('Hola anomimo');
	res.send('<b>Hola anomimo</b>');
});

app.listen(3000)
console.log('Corriendo en puerto 3000');