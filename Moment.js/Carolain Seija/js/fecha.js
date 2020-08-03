                         //Ejercicio UNO

//Usando Javascript
var datos = new Date();
var meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Dia = datos.getDate();
var Meses = datos.getMonth() + 1;
var Años = datos.getFullYear();
var fechaCompleta = document.getElementById("fecha");
fechaCompleta.innerHTML = Años+'-'+Meses+'-'+Dia;

//usando moment
var useMoment = moment();
var archivoMoment = document.getElementById("fechaMoment");
archivoMoment.innerHTML = useMoment.format("YYYY-M-D");


                        //Ejercicio DOS
                        
