var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
var sessionId;
var k = 0;
var ciudades_array = [];

function formateDate(date){
 var fechaCesionFormat;
 var year;
 var month;
 var day;

 var dateformat;

 if(date !== null && date !== ''){
  fechaCesionFormat = new Date(date);
  year = fechaCesionFormat.getFullYear();
  month = fechaCesionFormat.getMonth() + 1;
  day = fechaCesionFormat.getDate();

  if((day + "").length === 1){

    day = "0" + day;

  }
  if((month + "").length === 1){

    month = "0" + month;

  }
  dateformat = year + "/" + (month) + "/" + day;
  return dateformat;
}else{
  dateformat = '';
  return dateformat;
}
}
function viewService() {
    document.getElementById("loader-div").style.display = "block";
    myVar = setTimeout(myFunction, 2000);

}
function myFunction(){
// # Servicio/ #Despacho/ Orden de servicio/ Cliente / Fecha/ Origen/ Destino
// Nmero_Consecutivo_Viaje
   var array_servicios = [];
   var estado = document.getElementById("estado").value;
   var ordenS = document.getElementById("oServicio").value;
   var cadenaAnd = '';
   if (estado != '') {
    cadenaAnd = cadenaAnd + " and status=" +estado ;
   }
   if(ordenS != ''){
    cadenaAnd = cadenaAnd + " and Orden_de_Servicio='" +ordenS+"'" ;

   }

   var idCliente = document.getElementById("9028873-ui").value;
   var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select id,Num_Servicio,R6947057,Orden_de_Servicio,Cliente_Destino,createdAt,Origen,Destino,R8476682 from Servicio where R6311987="+idCliente+" and R8476682 IS NOT NULL"+cadenaAnd+"&sessionId="+ sessionId +"&output=json&maxRows=3000";

     $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_servicios = msg;
        },
        error: function(e){
        }
    });

      for (var k= 0; k <= $('#grid').find(".item").length; k++) {
      $("#Elements").remove();
      }
      $("#Elements").remove();
      
      for (var i=0; i < array_servicios.length; i++ ) {

   	    var origen;
   	    var destino;

        // Num_Servicio,R8476682,Orden_de_Servicio,R6311987,createdAt,R6522476,R6522476

          for (var f = 0; f < ciudades_array.length; f++) {
                if (array_servicios[i][6] == ciudades_array[f][0]) {

                    origen = ciudades_array[f][1];

                } 
                if (array_servicios[i][7] == ciudades_array[f][0]) {
                    
                    destino = ciudades_array[f][1];
                }

          }
        if (array_servicios[i][2]) {         
        var Num_despacho = getNumDespacho(array_servicios[i][2]);
        
        } else {
        var Num_despacho = '';    
        }
        var fecha = formateDate(array_servicios[i][5]);

        var newtr = '<tr class="item" id="Elements">';
        newtr = newtr + '<td class="a" width="10%"> ' + Num_despacho + ' </td> ';
        newtr = newtr + '<td class="a" width="10%" > ' + array_servicios[i][1] + ' </td>';
        newtr = newtr + '<td class="a"> ' + array_servicios[i][3] + ' </td>';
        newtr = newtr + '<td class="a"> ' + array_servicios[i][4]  + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + fecha + ' </td>';
        newtr = newtr + '<td class="a"> ' + origen + ' </td> ';
        newtr = newtr + '<td class="a"> ' + destino + ' </td>';
        newtr = newtr + '<td class="a"> <input value="' + array_servicios[i][0] + '" id="a'+k+'" type="hidden"> </td>';                
        newtr = newtr + '<td class="a"> <input value="' + array_servicios[i][8] + '" id="x'+k+'" type="hidden"> </td>';                
        newtr = newtr + '<td class="a"> <button type="button" class="btn btn-primary btn-block" id="1'+k+'" onclick="getDetalle(this, event)">Detalle</button> </td> </tr>';
         
        
        $('#ProSelected').append(newtr);
        k++

     }
     document.getElementById("loader-div").style.display = "none";

}

function webMethodOrganizeArrays () {
    var pdmhp = "";
    var pcjmhp = "";
    var array_attachment = "";    

    for (var i=0;i<array_attachment; i++ ) {
        if (pdmhp == 'ok') {
            pcjmhp = "KillP";
            array_source(pcjmhp);
        }

    }
}   

function getNumDespacho (idDespacho) {

   var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select placa from vehiculo1 where id = "+idDespacho+"&sessionId="+ sessionId +"&output=json&maxRows=3000";
   var Numero_d;
     $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            Numero_d = msg[0][0];
        },
        error: function(e){
        }
    });

    return Numero_d; 
} 

function getDetalle (event){
    
 var a = event.id;
 var id = a.substr(1,a.length);
 var cod = "a"+id;
 var cod2 = "x"+id;
 var labeltxt = document.getElementById(cod2).value;
 var domElement = document.getElementById(cod);
 window.location.href = 'detalleserv.html?CodeServ='+domElement.value+'&t800='+sessionId+'&c3po='+labeltxt;

}



function tiposMercancia (id) {
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre from Tipos_de_Mercancia where id= " + id + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var obj;
    var name;

     $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
          obj = msg;
          name = obj[0][0]; 
        },
        error: function(e){
        }
    });

     if (name == undefined) {
	     name = '';
	     return name;	
     }else {
	     return name;     	
     }

}

function ciudad() {
  var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select id,Nombre from Ciudad where Codigo_Ciudad=000 &sessionId="+ sessionId +"&output=json&maxRows=3000";

  $.ajax({
    type: 'POST',
    url: webMethod,
    async: false,
    dataType: 'json',
    success: function(msg){

      ciudades_array = msg;

    },
    error: function(e){
    }
  });

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
    ciudad();

}

