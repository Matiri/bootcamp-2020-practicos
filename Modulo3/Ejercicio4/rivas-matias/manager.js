const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const Schema = mongoose.Schema;

// conexion
mongoose.connect("mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/canciones?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.set("useUnifiedTopology", true);

// schema
const schema = new Schema({
    name: {type: String, required: true},
    album: String,
    duration: String,
    artist: {
        uuid: String,
        name: String,
        coverUrl: String,
    }
})

//modelo
const cancion = mongoose.model("cancion", schema);
var nuevaCancion = new cancion({
    name: "Killer Queen",
    album: "Killer Queen",
    duration: "3:03",
    artist: {
        uuid: "1",
        name: "Queen",
        coverUrl: "nonsense",
    }
})

const listarCanciones = (req, res) => {
    if(cancion.length > 0){
        cancion.find()
            .then(function(doc){
                res.send(doc);
            })
    } else {
        res.status(404).send("No se encontraro canciones!");
    }
}

const agregarCancion = (req, res) => {
    nuevaCancion.save(function(err){
        if(err){
            console.log('No se pudo guardar la cancion' + err);
            res.status(400);
            res.send('No se pudo guardar');
        }else{
            console.log('Se guardó la canción');
            res.status(201);
            res.body(nuevaCancion);
            res.send("Se agregó la canción correctamente");
        }
    })
}

module.exports = {
    listarCanciones,
    agregarCancion
}