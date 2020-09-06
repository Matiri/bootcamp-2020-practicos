const express = require('express');
var server = express();
server.use(express.json());

const canciones = [{
  "name": "name",
  "artist": "artist",
  "duration": "duration",
}];

server.route('/')
  .get(function(req, res){
    res.send(canciones);
  })

  .post(function(req, res){
    var song = req.body;
    canciones.push(song);
    res.status(201);
    res.send(canciones);
  })

server.route('/name/:name')
  .get(function(req, res){
    var nombre = req.params;
    res.send(nombre);
  })

  .delete(function(req, res){
    var nombre = req.params;
    canciones.forEach(element => {
      if(element.name == nombre){
        var index = canciones.indexOf(element);
        canciones.splice(index, 1);
      }
      res.send(canciones);
    })
    
  })

server.listen(3000);
