//EJERCICIO 1  
var h1 = document.getElementById("fechaJs");
var h2 = document.getElementById("fechaM"); 

//JS
var fecha = new Date();
var año = fecha.getFullYear();
var mes = fecha.getMonth()+1;
var dia = fecha.getDate();
var union = año + "-" + mes + "-" + dia; 
h1.append(union);


//MOMENT
var diaM = moment().format("YYYY-MM-DD");
h2.append(diaM);

//EJERCICIO2

//JS
function validarFechaJs(day,month,year){
    var dteDate;
    month=month-1;
    dteDate=new Date(year,month,day);
    if ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear())){
        return alert("fecha correcta");
    } else if (day > 28 && month == 2) {
        return alert("fecha incorrecta");        
    }
    return alert("fecha incorrecta");
}