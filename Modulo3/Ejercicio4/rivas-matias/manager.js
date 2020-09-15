const { error } = require("console");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// conexion
mongoose.connect("mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/canciones?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// schema
var schema = new Schema({
    name: {type: String, required: true},
    album: String,
}, {collection: "canciones"})

//modelo
var canciones = mongoose.model("canciones", schema, "canciones");

var nuevaCancion = new canciones({
    name: "Killer Queen",
    album: "Killer Queen",
    }
)

const validarCancion = (cancion) => {
    if(cancion.name && cancion.album){
        return true;
    }
    return false;
}

const listarCanciones = async(req, res) => {
    var songs = await canciones.find({})
    if(songs.length > 0){
        res.send(songs)
    } else {
        res.status(404).send("No se encontraro canciones!");
    }
}

const agregarCancion = (req, res) => {
    const newSong = new canciones(req.body);

    if(validarCancion(newSong) == true){
        newSong.save(function(err){
            if(err){
                res.status(400).send("El formato de la canción es incorrecto")
            } else {
                res.status(201)
                res.send("La canción se agregó correctamente")
            }
        })
    }
}

const obtenerCancionPorNombre = async(req, res) => {
    var nombre = req.params.name;
    var songs = await canciones.find({});
    const resultado = songs.filter((element) => {
        if (element.name === nombre) {
            return true;
        }
            return false;
    })
    res.send(resultado);
}

const modificarCancion = async(req, res) => {
    var nombre = req.params.name;
    const cancion = req.body;
    canciones.findOneAndUpdate(nombre, cancion, (error, data) => {
        if(error){
            res.send('error');
        } else {
            res.send(data);
        }
    })
    /*
    var songs = await canciones.find({});
    if(validarCancion(cancion) == true){
        const filtro = async(element) => {
            if(element.name !== cancion.name){
                // false: no se agrega, true: sí se agrega
                return false;
            } else {
                const newName = cancion.name;
                const newAlbum = cancion.album;
                let doc = await canciones.findOneAndUpdate(newName, newAlbum,{
                    new: true
                });
                return(
                    doc.name,
                    doc.age
                )
            }
        }
        let resultado = songs.filter(filtro)
        res.send(resultado);
    } else {
        res.status(400).send("El formato de la canción es incorrecto!");
    }*/
}

const eliminarCancion = (req, res) => {
    var nombre = req.params.name;
    canciones.findOneAndDelete(nombre, (error, deletedRecord) => {
        if(!error){
            console.log(deletedRecord);
            res.send(deletedRecord);
        }
    })
}

module.exports = {
    listarCanciones,
    agregarCancion,
    obtenerCancionPorNombre,
    modificarCancion,
    eliminarCancion
}