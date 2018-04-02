var sessionId;

function onLoad() {

	this.sessionId();

	var pass = document.getElementById("user").value;
	var user = document.getElementById("pass").value;
	var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?query=select id from Cliente1 where NombreUsuario='"+user+"' and ContrasenaUsuario='"+pass+"' &sessionId="+ sessionId +"&output=json&maxRows=3000";

    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){
        	
        	if (msg.length > 0) {
        		window.location.href = '../index.php?CodeInt='+msg[0][0];
        	} else {
        		alert("Usuario o Contraseña Incorrecta");
        		return
        	}
			        
        },
        error: function(e){
            alert("Usuario o contraseña Incorrecta");
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

}
