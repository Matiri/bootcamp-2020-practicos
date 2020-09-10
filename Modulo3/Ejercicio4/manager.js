const mongoose = require("mongoose");
const { Int32 } = require("bson");

// conexion
mongoose.connect("mongodb://localhost:27017/canciones", {useNewUrlParser: true});

// schema
const schema = mongoose.Schema({
    uuid: Number,
    name: String,
    album: String,
    duration: String,
    artist: {
        uuid: String,
        name: String,
        cov: String,
    }
})

//modelo
const article = mongoose.model("Article", schema);

const listarCanciones = (req, res) => {
    if(canciones.length > 0){
        res.send(canciones);
    } else {
        res.status(404).send("No se encontraro canciones!");
    }
}

module.exports = {
    listarCanciones
}