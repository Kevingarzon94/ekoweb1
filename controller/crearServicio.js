var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
var sessionId;


function onInit () {
    var clienteId = "7287325";
   sessionId();

    var form1 = document.getElementById("urbano");
    var form2 = document.getElementById("Exportacion");
    var form3 = document.getElementById("importacion");
       form1.style.display = "none";
       form2.style.display = "none";
       form3.style.display = "none";

   var that = this;

   var webMethod1 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre,id from Ciudad &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod2 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from Tipo_Vehiculo &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod3 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre,id from Carroceria &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod4 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from agencia &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod5 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from grupo_de_material_ &sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod6 = "https://www.impeltechnology.com/rest/api/getPicklist?output=json&objDefId=6311524&fieldDefId=6311686&sessionId="+ sessionId;
   var webMethod7 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from sede where R6311960="+ clienteId +"&sessionId="+ sessionId +"&output=json&maxRows=3000";
   var webMethod8 = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from Tipos_de_Mercancia &sessionId="+ sessionId +"&output=json&maxRows=3000";



   var array_ciudades;
   var array_tipo_vehiculo;
   var array_carroceria;
   var array_agencia;
   var array_mercancia;
   var array_Unidadempaque;
   var array_sede;
   var array_tipo_mercancia;

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

    $.ajax({
        type: 'GET',
        url: webMethod6,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_Unidadempaque = msg;
        },
        error: function(e){
        }
    });

    $.ajax({
        type: 'GET',
        url: webMethod7,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_sede = msg;
        },
        error: function(e){
        }
    });

    $.ajax({
        type: 'GET',
        url: webMethod8,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_tipo_mercancia = msg;
        },
        error: function(e){
        }
    });

    array_carroceria.sort();
    array_ciudades.sort();
    array_tipo_vehiculo.sort();
    array_agencia.sort();
    array_mercancia.sort();
    array_Unidadempaque.sort();
    array_sede.sort();
    array_tipo_mercancia.sort();
    
    addOptions("origen_impo", array_ciudades);
    addOptions("destino_impo", array_ciudades);
    addOptions("origen_expo", array_ciudades);
    addOptions("destino_expo", array_ciudades);

    addOptions("origen", array_ciudades);
    addOptions("destino", array_ciudades);
    addOptions2("tipo_vehiculo", array_tipo_vehiculo);
    addOptions3("carroceria", array_carroceria);
    addOptions4("agencia", array_agencia);
    addOptions5("t_mercancia", array_mercancia);
    addOptions6("u_empaque", array_Unidadempaque);
    addOptions5("dir_origen", array_sede);
    addOptions5("t_mercancia1", array_tipo_mercancia);


}
function setMercancia() {

    var grupo_material = document.getElementById("t_mercancia").value;

    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,id from material_ where R8546006=" + grupo_material + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var array_mercancia;

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_mercancia = msg;
        },
        error: function(e){
        }
    });
    
    var mercancia = document.getElementById("mercancia_1");

    mercancia.options.length = 0;

    array_mercancia.sort();
    addOptions5("mercancia_1", array_mercancia);

}

function addOptions6(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i].name; 
         option.value = array[i].id;
         select.add(option);
        }
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
    var mercancia = document.getElementById("mercancia_1").value;
    var u_empaque = document.getElementById("u_empaque").options[document.getElementById("u_empaque").selectedIndex].text;
    var Valor_m = document.getElementById("Valor_m").value;
    var fechacargue = document.getElementById("fechacargue").value;
    var fechadescargue = document.getElementById("fechadescargue").value;
    var direccionOrigen = document.getElementById("dir_origen").value;
    var tipos_mercancia = document.getElementById("t_mercancia1").value;

    var cliente =  document.getElementById("9028873-ui").value;

    var webMethod = "https://www.impeltechnology.com/rest/api/createRecord?&output=json&objName=Servicio&useIds=false&R6311987="+cliente+"&R7442986="+tipos_mercancia+"&R6522476="+direccionOrigen+"&Origen="+origen+"&Destino="+destino+"&R7074667="+t_vehiculo+"&CarroceriaServ="+carroceria+"&Peso_conv="+peso+"&Agencia="+agencia+"&R8557298="+t_mercancia+"&R8557301="+mercancia+"&unidad_de_empaque="+u_empaque+"&Tarifa="+Valor_m+"&fecha_y_hora_de_cargue="+fechacargue+"&fecha_y_hora_de_descargue="+fechadescargue+"&sessionId="+sessionId;
    
    $.ajax({
        type: 'GET',
        url: webMethod,
        dataType: 'json',
        async: false,
        success: function(msg) {
            alert("Servicio Creado Correctamente"); 
        },
        error: function(e){
            alert(e.responseJSON.message);
        }
        });
    
}
function showForm() {

    var form = document.getElementById("tipo_servicio");
    var form1 = document.getElementById("urbano");
    var form2 = document.getElementById("Exportacion");
    var form3 = document.getElementById("importacion");
    

    if (form.value == "3") {

       form1.style.display = "block";
       form2.style.display = "none";
       form3.style.display = "none";  
    }
    if (form.value == "4") {

        form1.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";  
     }    
    if (form.value == "1") {

       form1.style.display = "none";
       form2.style.display = "none";
       form3.style.display = "block";  
    }
    if (form.value == "2") {

       form1.style.display = "none";
       form2.style.display = "block";
       form3.style.display = "none";  
    }
}

function showIndexfirst () {
    var clienteNit = documet.getElementById("exportacionid");

    if (clienteNit == "") {

    var clienteNit = documet.getElementById("exportacionid");

    }
}



