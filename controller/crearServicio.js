var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
var sessionId;


function onInit () {

   sessionId();
   var that = this;

   var webMethod1 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre,id from Ciudad &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod2 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre,id from Tipo_Vehiculo &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod3 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre,id from Carroceria &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod4 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from agencia &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod5 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre,id from Tipos_de_Mercancia &sessionId="+ sessionId +"&output=json&maxRows=3000";




   var array_ciudades;
   var array_tipo_vehiculo;
   var array_carroceria;
   var array_agencia;
   var array_mercancia;



    $.ajax({
        type: 'POST',
        url: webMethod1,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_ciudades = msg;
        },
        error: function(e){
        }
    });
    
    $.ajax({
        type: 'POST',
        url: webMethod2,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_tipo_vehiculo = msg;
        },
        error: function(e){
        }
    });

    $.ajax({
        type: 'POST',
        url: webMethod3,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_carroceria = msg;
        },
        error: function(e){
        }
    });

    $.ajax({
        type: 'POST',
        url: webMethod4,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_agencia = msg;
        },
        error: function(e){
        }
    });

    $.ajax({
        type: 'POST',
        url: webMethod5,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_mercancia = msg;
        },
        error: function(e){
        }
    });

    array_carroceria.sort();
    array_ciudades.sort();
    array_tipo_vehiculo.sort();
    array_agencia.sort();
    array_mercancia.sort();

    addOptions("origen", array_ciudades);
    addOptions("destino", array_ciudades);
    addOptions2("tipo_vehiculo", array_tipo_vehiculo);
    addOptions3("carroceria", array_carroceria);
    addOptions4("agencia", array_agencia);
    addOptions5("t_mercancia", array_mercancia);


}

function addOptions5(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i][0]; 
         option.value = array[i][1];
         select.add(option);
        }
       }

function addOptions4(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i][0]; 
         option.value = array[i][1];
         select.add(option);
        }
       }


function addOptions3(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i][0]; 
         option.value = array[i][1];
         select.add(option);
        }
       }

function addOptions2(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i][0]; 
         option.value = array[i][1];
         select.add(option);
        }
       }

function addOptions(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i][0]; 
         option.value = array[i][1];
         select.add(option);
        }
       }


function sessionId(){
    var that = this;
    var user = "ekokarga.movil";
    var pass = "qwerty123";
    var validateUser;

    var webMethod = "https://www.impeltechnology.com/rest/api/login?loginName="+ user +"&password="+ pass +"&output=json";
    
    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){

            sessionId = msg.sessionId;
        
        },
        error: function(e){
            alert("Usuario o contraseña Incorrecta");
        }
    });

}

function crearServicio () {
    
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var t_vehiculo = document.getElementById("tipo_vehiculo").value;
    var carroceria = document.getElementById("carroceria").value;
    var peso = document.getElementById("peso").value;
    var agencia = document.getElementById("agencia").value;
    var t_mercancia = document.getElementById("t_mercancia").value;
    var u_empaque = document.getElementById("u_empaque").options[document.getElementById("u_empaque").selectedIndex].text;
    var Valor_m = document.getElementById("Valor_m").value;
    var fechacargue = document.getElementById("fechacargue").value;
    var fechadescargue = document.getElementById("fechadescargue").value;
    var cliente = "6658872";

    var webMethod = "https://www.impeltechnology.com/rest/api/createRecord?&output=json&objName=Servicio&useIds=false&R6311987="+cliente+"&Origen="+origen+"&Destino="+destino+"&R7074667="+t_vehiculo+"&CarroceriaServ="+carroceria+"&PesoTON="+peso+"&Agencia="+agencia+"&R7442986="+t_mercancia+"&unidad_de_empaque="+u_empaque+"&Tarifa="+Valor_m+"&fecha_y_hora_de_cargue="+fechacargue+"&fecha_y_hora_de_descargue="+fechadescargue+"&sessionId="+sessionId;
    
    $.ajax({
        type: 'GET',
        url: webMethod,
        dataType: 'json',
        async: false,
        success: function(msg) {
            alert("Servicio Creado Correctamente"); 
        },
        error: function(e){
            console.log("Error al cargar el servicio");
        }
        });
    
}
