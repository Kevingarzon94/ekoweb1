Number.prototype.formatMoney = function(c, d, t) {
  var n = this,
   c = isNaN(c = Math.abs(c)) ? 2 : c,
   d = d == undefined ? "." : d,
   t = t == undefined ? "," : t,
   s = n < 0 ? "-" : "",
   i = String(parseInt(n = Math.abs(Number(n)
  || 0).toFixed(c))),
   j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) :
   "");
 };

var sessionId;
var ciudades_array = [];
var tVehiculos_array = [];

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

function tarifasGet(idCliente) {
 ciudad();
 var array_tarifas;

 var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select R6667601,Origen,Destino,Configuracion,Costo,Tarifa,Margen from Tarifa where R6667601 = "+ idCliente +" &sessionId="+ sessionId +"&output=json&maxRows=3000";

 $.ajax({
  type: 'POST',
  url: webMethod,
  async: false,
  dataType: 'json',
  success: function(msg){              
    array_tarifas = msg;
  },
  error: function(e){
  }
});
ConfiguracionVehiculo();

 for (var k= 0; k <= $('#grid').find(".item").length; k++) {
  $("#Elements").remove();
}
$("#Elements").remove();

for (var i=0; i < array_tarifas.length; i++ ) {

  var origen;

  var destino;
  var tVehiculo;

  for (var f = 0; f < ciudades_array.length; f++) {
        if (array_tarifas[i][1] == ciudades_array[f][0]) {

            origen = ciudades_array[f][1];

        } 
        if (array_tarifas[i][2] == ciudades_array[f][0]) {
            
            destino = ciudades_array[f][1];
        }

  }
  for (var k = 0; k < tVehiculos_array.length; k++) {
    
    if (array_tarifas[i][3] == tVehiculos_array[k][0]) {            
        tVehiculo = tVehiculos_array[k][1];
    }

  }

  var newtr = '<tr class="item" id="Elements">';
  newtr = newtr + '<td class="a" width="10%"> ' + origen + ' </td>';
  newtr = newtr + '<td class="a" width="15%"> ' + destino + ' </td> ';
  newtr = newtr + '<td class="a"> ' + tVehiculo + ' </td>';        
  newtr = newtr + '<td class="a"> $' + parseFloat(array_tarifas[i][5]).formatMoney(0, ',', '.') + ' </td> </tr>';


  $('#ProSelected').append(newtr);
}
}

function userInfo(idCliente) {

 var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,razon_social,Direccion,telefono,NIT,sitio_web,email,Celular_Cliente,R6445450 from Cliente1 where id = "+ idCliente +" &sessionId="+ sessionId +"&output=json&maxRows=3000";

 $.ajax({
  type: 'POST',
  url: webMethod,
  async: false,
  dataType: 'json',
  success: function(msg){              
    obj = msg;

    document.getElementById("razon_social").value = obj[0][1];
    document.getElementById("dir_c").value = obj[0][2];
    document.getElementById("tel").value = obj[0][3];

  },
  error: function(e){
  }
});
}

function ConfiguracionVehiculo () {
  var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select id,name from Tipo_Vehiculo&sessionId="+ sessionId +"&output=json&maxRows=3000";
  var name;

  $.ajax({
    type: 'POST',
    url: webMethod,
    async: false,
    dataType: 'json',
    success: function(msg){              

      tVehiculos_array = msg;

    },
    error: function(e){
    }
  });

}

function findComercial (id) {
  var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Primer_Nombre,Segundo_Nombre from Vendedor where id= " + id + "&sessionId="+ sessionId +"&output=json&maxRows=3000";
  var name;

  $.ajax({
    type: 'POST',
    url: webMethod,
    async: false,
    dataType: 'json',
    success: function(msg){              

      name = obj[0][0] + " " + obj[0][0];

    },
    error: function(e){
    }
  });

  return name;
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

  var idCliente = document.getElementById("9028873-ui").value;

  this.tarifasGet(idCliente);
  this.userInfo(idCliente);
  this.getContactos(idCliente);


}

function getContactos(idCliente) {
  var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select name,Cargo,email from Contacto2 where R6311969 = "+idCliente+"&sessionId="+ sessionId +"&output=json&maxRows=3000";
  var array_serviciosHistorial = [];
  array_serviciosHistorial.length = 0;
  $.ajax({
      type: 'POST',
      url: webMethod,
      async: false,
      dataType: 'json',
      success: function(msg){              
      array_serviciosHistorial = msg;

      },
      error: function(e){
      }
  });

  $(document).ready(function() {
      $('#example').DataTable( {
          "filter": false,
          "destroy": true,
          data: array_serviciosHistorial,
          columns: [
              { title: "Contacto" },
              { title: "Cargo" },
              { title: "Email" }

          ]
      } );
  } );
}