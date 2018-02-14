var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
var sessionId;


function viewService(){

   var array_servicios;
   var estado = document.getElementById("estado").value;

   var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Num_Servicio,R7442986,PesoTON,Origen,fecha_y_hora_de_cargue,Destino,fecha_y_hora_de_descargue,numeros_de_entregas,Total_Costo from Servicio where R6311987 = 6658872 and status=" +estado+ "&sessionId="+ sessionId +"&output=json&maxRows=3000";

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

   	    var t_mercancia = tiposMercancia(array_servicios[i][1]);
   	    var origen = ciudad(array_servicios[i][3]);
   	    var destino = ciudad(array_servicios[i][5]);


        var newtr = '<tr class="item" id="Elements">';
        newtr = newtr + '<td class="a" width="10%"> ' + array_servicios[i][0] + ' </td>';
        newtr = newtr + '<td class="a" width="15%"> ' + t_mercancia + ' </td> ';
        newtr = newtr + '<td class="a"> ' + array_servicios[i][2] + ' </td>';
        newtr = newtr + '<td class="a"> ' + origen + ' </td> ';
        newtr = newtr + '<td class="a" width="15%"> ' + array_servicios[i][4] + ' </td>';
        newtr = newtr + '<td class="a"> ' + destino + ' </td> ';
        newtr = newtr + '<td class="a"> ' + array_servicios[i][8] + ' </td> </tr>';


        $('#ProSelected').append(newtr);
     }


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

function ciudad(id) {
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Nombre from Ciudad where id= " + id + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
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
     } else {
     	return name;	
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

