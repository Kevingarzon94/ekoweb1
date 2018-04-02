var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

var url_string = window.location;; //window.location.href
var url = new URL(url_string);

var idServicio = url.searchParams.get("CodeServ");
var sessionId = url.searchParams.get("t800");
var idDespacho = url.searchParams.get("c3po");
var map;
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

function getIdDespacho() {   
ciudad();
Manifiestos();
DetalledelServicio();
DetalleDespacho();
incidencias();
}

function DetalleDespacho() {
	var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nmero_Consecutivo_Viaje,createdAt,R8544591 from Despacho where id= " + idDespacho + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var array_despacho;
    var vehiculo = [];
    var nombreC = '';
    var placa = '';

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_despacho = msg;
        },
        error: function(e){
        }
    });
    for (var i=0; i < array_despacho.length; i++ ) {
        
        var vehiculo = infoVehiculo(array_despacho[i][2]);
        if (vehiculo.length > 0){
         nombreC = vehiculo[0][1];
         placa = vehiculo[0][0];
        }
        var newtr = '<tr class="item3" id="Elements2">';
        newtr = newtr + '<td class="a" width="15%"> ' + array_despacho[i][0] + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + formateDate(array_despacho[i][1]) + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + nombreC + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + placa + ' </td> </tr>';
     
        
        $('#DespachoTbody').append(newtr);

     }

}
function infoVehiculo (id) {
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select placa,conductor_ from vehiculo1 where id= " + id + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var array_vehiculo = [];

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_vehiculo = msg;
        },
        error: function(e){
        }
    });

    return array_vehiculo;


}
function Manifiestos(){
	var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Num_Manifiesto from Manifiesto_Electronico where R8564943= " + idDespacho + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var array_novedades = [];

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
    	array_novedades = msg;
        },
        error: function(e){
        }
    });

      for (var k= 0; k <= $('#grid').find(".item").length; k++) {
      $("#Elements").remove();
      }
      $("#Elements").remove();
      
      for (var i=0; i < array_novedades.length; i++ ) {


        var newtr = '<tr class="item" id="Elements">';
        newtr = newtr + '<td class="a" width="15%"> manifiesto de transp #' + array_novedades[i][0] + ' </td> ';
        newtr = newtr + '<td class="a"> <button type="button" class="btn btn-primary">Ver Manifiesto</button> </td> </tr>';
     
        
        $('#ProSelected').append(newtr);

     }
}

function DetalledelServicio(){
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Orden_de_Servicio,Cliente_Destino,Destino,Direccion_Destino,R8557301,Peso_conv,fecha_y_hora_de_descargue,'','','',Fecha_y_hora_de_cargue_real from Servicio where R8476682= " + idDespacho + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var array_detalleDespacho;

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
        array_detalleDespacho = msg;
        },
        error: function(e){
        }
    });
      for (var k= 0; k <= $('#detallesdelDespacho').find(".item2").length; k++) {
      $("#Elements1").remove();
      }
      $("#Elements1").remove();
      
      for (var i=0; i < array_detalleDespacho.length; i++ ) {

        var nameProd = infoProducto( array_detalleDespacho[i][4] );
        
        var origen = array_detalleDespacho[i][2];

        for (var f = 0; f < ciudades_array.length; f++) {
            if (array_detalleDespacho[i][2] == ciudades_array[f][0]) {

                origen = ciudades_array[f][1];

            } 


      }
        var direccion = array_detalleDespacho[i][3];
        var newtr = '<tr class="item2" id="Elements1">';
        newtr = newtr + '<td class="a" width="15%"> ' + array_detalleDespacho[i][0] + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + array_detalleDespacho[i][1] + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + origen + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + direccion + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' +  nameProd + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + array_detalleDespacho[i][5] + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + formateDate(array_detalleDespacho[i][10]) + ' </td> ';        
        newtr = newtr + '<td class="a" width="15%"> ' + formateDate(array_detalleDespacho[i][6]) + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + array_detalleDespacho[i][7] + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + array_detalleDespacho[i][8] + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + array_detalleDespacho[i][9] + ' </td>';
        newtr = newtr + '<td class="a" width="15%">  </td> </tr>';

        
        $('#detallesdelDespachoTbody').append(newtr);

     }

}

function sedeCliente(id) {
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name from sede where id="+id+"&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var direccion;
    $.ajax({
      type: 'POST',
      url: webMethod,
      async: false,
      dataType: 'json',
      success: function(msg){
  
        direccion = msg[0][0];
  
      },
      error: function(e){
      }
    });
    return direccion;
  
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
  
function infoProducto (id) {
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name from material_ where id= " + id + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var name_prod;

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            name_prod = msg[0][0];
        },
        error: function(e){
        }
    });

    return name_prod;
}

function incidencias () {
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Tipo,Fecha,Detalle from Incidencia where R6983225= " + idServicio + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
    var array_incidencia;

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              
            array_incidencia = msg;
        },
        error: function(e){
        }
    });
    for (var i=0; i < array_incidencia.length; i++ ) {
        
        var newtr = '<tr class="item4" id="Elements5">';
        newtr = newtr + '<td class="a" width="15%"> ' + array_incidencia[i][0] + ' </td>';
        newtr = newtr + '<td class="a" width="15%"> ' + array_incidencia[i][1] + ' </td>';
        newtr = newtr + '<td class="a" width="15%"> ' + array_incidencia[i][2] + ' </td>';
        newtr = newtr + '<td class="a" width="15%"> <button type="button" class="btn btn-primary btn-block" onclick="getImg(this, event)">Evidencia</button> </td> </tr>';
    
        
        $('#novedadesTbody').append(newtr);

     }
}

function getDocumentMc() {
	var webMethod1 = "https://www.impeltechnology.com/rest/api/getRelationships?sessionId="+sessionId+"&objName=Despacho&id="+idDespacho+"&relName=R8564943&fieldList=id&output=json";
    var idManifiesto;

    $.ajax({
        type: 'GET',
        url: webMethod1,
        async: false,
        dataType: 'json',
        success: function(msg){              
    	idManifiesto = msg[0].id;
        },
        error: function(e){
        }
    });
	
	var webMethod = "https://www.impeltechnology.com/rest/api/getBinaryData?objName=Manifiesto_Electronico&id="+idManifiesto+"&output=json&fieldName=Manifiesto_Impreso&sessionId="+sessionId;
    $.ajax({
        type: 'GET',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){              

        alert("No se cargo el docuemtno correspondiente");
        },
        error: function(e){
                    alert("No se argo el docuemtno correspondiente");

        }
    });
}
function getDocumentoCumplido() {
	var webMethod = "https://www.impeltechnology.com/rest/api/getBinaryData?objName=Servicio&id="+idServicio+"&output=json&fieldName=Cumplido_Servicio&sessionId="+sessionId;
    $.ajax({
        type: 'GET',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){

    	if (msg.Cumplido_Servicio == null) {
    		alert("No se cargo la evidencia.");
    	}

        },
        error: function(e){
        }
    });
}