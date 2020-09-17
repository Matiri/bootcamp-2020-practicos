var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// schema
var schema = new Schema({
    name: {type: String, required: true},
    album: String,
}, {collection: "canciones"})

// conexion
mongoose.connect("mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/canciones?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//modelo
var canciones = mongoose.model("canciones", schema, "canciones");

module.exports = canciones;