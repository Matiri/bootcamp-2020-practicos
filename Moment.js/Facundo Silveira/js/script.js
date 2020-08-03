//Usando Javascript
var datos = new Date();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
var dia = datos.getDate();
var mes = datos.getMonth() + 1;
var año = datos.getFullYear();
var fechaCompleta = document.getElementById("fecha");
fechaCompleta.innerHTML = año + '-' + mes + '-' + dia;

//Usando moment
var useMoment = moment();
var archivoMoment = document.getElementById("fechaMoment");
archivoMoment.innerHTML = useMoment.format("YYYY-M-D");