var sessionId;

    sessionId();

function getData() {

    var id = document.getElementById("estado").value;
    var idCliente = document.getElementById("9028873-ui").value;

    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select Num_Servicio,R8476682,Orden_de_Servicio,Cliente_Destino,Fecha_y_hora_de_cargue_real,Direccion_Origen,Direccion_Destino from Servicio where status ="+id+" and R6311987 = "+idCliente+"&sessionId="+ sessionId +"&output=json&maxRows=3000";
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
                { title: "#Servicio" },
                { title: "#Despacho" },
                { title: "Orden de servicio" },
                { title: "Cliente" },
                { title: "Fecha" },
                { title: "Origen" },
                { title: "Destino" }
            ]
        } );
    } );
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