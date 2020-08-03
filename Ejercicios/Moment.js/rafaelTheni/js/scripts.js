//Mostrar la fecha de hoy con el siguiente formato 2020-7-9
//Hacerlo primero usando ‘Date’ de Javascript
//y luego usando la librería Moment.js

//Date
var fechaJS= new Date(),
fechaJSyear= fechaJS.getFullYear(),
fechaJSmonth= fechaJS.getMonth() + 1,
fechaJSday= fechaJS.getDate();
document.getElementById("pFechaDate").innerHTML = "La fecha de hoy es " + fechaJSyear + "/" + fechaJSmonth + "/" + fechaJSday;

//Moment.js
moment.locale('es');
var fechaMoment= moment().format('YYYY/M/D');
document.getElementById("pFechaMoment").innerHTML = "La fecha de hoy es " + fechaMoment;