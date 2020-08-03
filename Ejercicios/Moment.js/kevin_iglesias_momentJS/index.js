/* EJERCICIO 1 */

/* USING JS */

var fecha = new Date();
var h1 = document.getElementById("dateUsingJs");
var dateJS = "Fecha usando JS : " + fecha.getFullYear() + "/ "  + (fecha.getMonth() + 1) + " / " + fecha.getDate()

/* USING MOMENT JS */
    
var h2 = document.getElementById("dateUsingMoment");
var dateMoment = "Fecha usando MOMENTJS : " + moment().format('YYYY / MM / DD');

/* EJERCICIO 2 */

/* USING JS */

function Start(){
var day = fecha.getDate();
var month = (fecha.getMonth() + 1);
var year = fecha.getFullYear();
FechaJS(day, month, year);
}

function FechaJS(dd, mm, yy) {
    var newDate = new Date();
    var txt = document.getElementById("pElement");
    var compare = {
        day : newDate.getDate(),
        month : newDate.getMonth() + 1,
        year : newDate.getFullYear()
    }
    if (dd == compare.day && mm == compare.month && yy == compare.year) {
        txt.innerHTML = "Las fechas coinciden";
        txt.style.color = "green";
    }else{
        txt.style.color = "red";
        txt.innerHTML = "Las fechas no coinciden";
    }

}

/* USING MOMENT JS */

function FechaMoment() {
    var fecha = '29-02-2021'
    txt = document.getElementById('pElement');
    var validate = moment(fecha, 'DD-MM-YYYY');
    if(validate.isValid() == true){
    txt.innerHTML = fecha;
    }else{
    txt.innerHTML = 'Fecha inválida';
    }
}



/* RESULTADOS */

/* FechaJS(day, month, year);  */
 h1.innerHTML = dateJS;
h2.innerHTML = dateMoment;  