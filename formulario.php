<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Eko Karga Clientes</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

  <!-- Plugin CSS -->
  <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/creative05.min.css" rel="stylesheet">

  <script src="controller/crearServicio.js"></script>
</head>

<body id="page-top" onload="onInit()">
<?php

  if (!$_SESSION["CodeInt"]) {
    header('Location: Login/index.html');

  }

  ?>
  <input id="9028873-ui" type="text" value="<?php echo $_SESSION["CodeInt"] ?>" hidden>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Eko Karga</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <a style="color: black;" class="nav-link js-scroll-trigger" href='index.php?CodeInt=<?php echo $_SESSION["CodeInt"];?>'>Perfil</a>
          </li>
          <li class="nav-item">
            <a style="color: black;" class="nav-link js-scroll-trigger" href="servicios.php">Consulta</a>
          </li>
          <li class="nav-item">
            <a style="color: green;" class="nav-link js-scroll-trigger" href="formulario.html">Nuevo Servicio</a>
          </li>
          <li class="nav-item">
            <a style="color: black;" class="nav-link js-scroll-trigger" href="historial.php">Historial</a>
          </li>
          <li class="nav-item">
            <a style="color: black;" class="nav-link js-scroll-trigger" href="Login/index.html">Salir</a>
          </li>
      </ul>
      </div>
    </div>
  </nav>

  <header class="text-center text-white d-flex">
    <div class="container my-auto">

    </div>
  </header>

  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Diligencie la siguiente información</h2>
          <hr class="my-4">
        </div>
        <div class="form-group">
          <label for="option">Seleccione el tipo de Servicio</label>
          <select class="form-control" name="tipo_servicio" id="tipo_servicio" onchange="showForm()">
          <option value="" ></option>
          <option value="1" >Importacion</option>
            <option value="2" >Exportacion</option>
            <option value="3" >Urbano</option>
            <option value="4" >Nacional</option>
            

          </select>
        </div>
      </div>
    </div>

    <div class="container" id="urbano">
      <br>
      
      <div class="form-group">
        <label for="option">Origen</label>
        <select class="form-control" name="origen" id="origen">

        </select>
      </div>

      <div class="form-group">
        <label for="number">Direccion Origen</label>
        <select class="form-control" name="dir_origen" id="dir_origen">

        </select>
      </div>

      <div class="form-group">
        <label for="option">Destino</label>
        <select class="form-control" name="destino" id="destino">

        </select>
      </div>

      <div class="form-group">
        <label for="number">Direccion Destino</label>
        <input class="form-control" id="dir_destino" name="dir_destino" type="text" >
      </div>

      <div class="form-group">
        <label for="option">Configuración del Vehículo</label>
        <select class="form-control" name="tipo_vehiculo" id="tipo_vehiculo">

        </select>
      </div>

      <div class="form-group">
        <label for="option">Carroceria</label>
        <select class="form-control" name="carroceria" id="carroceria">

        </select>
      </div>
      
      <div class="form-group">
        <label for="number">Peso en toneladas</label>
        <input class="form-control" id="peso" name="peso" type="number" placeholder="TON">
      </div>

      <div class="form-group">
        <label for="option">Agencia</label>
        <select class="form-control" name="agencia" id="agencia">

        </select>
      </div>
      <div class="form-group">
        <label for="option">Tipo de Mercancia</label>
        <select class="form-control" name="t_mercancia1" id="t_mercancia1">
        </select>
      </div>
      <div class="form-group">
        <label for="option">Tipos de Material</label>
        <select class="form-control" name="t_mercancia" id="t_mercancia" onchange="setMercancia()">
           <option value=""> </option>
        </select>
      </div>
      <div class="form-group">
        <label for="option">Material</label>
        <select class="form-control" name="mercancia_1" id="mercancia_1">

        </select>
      </div>
      <div class="form-group">
        <label for="option">Unidad de Empaque</label>
        <select class="form-control" name="u_empaque" id="u_empaque">

       </select>
     </div>

     <div class="form-group">
      <label for="number">Tarifa</label>
      <input class="form-control" id="Valor_m" name="Valor_m" type="text" placeholder="pesos col">
    </div>

    <div class="form-group">
      <label for="number">Fecha y Hora de Cargue</label>
      <input class="form-control" type="datetime-local" name="fechacargue" id="fechacargue">
    </div> 

    <div class="form-group">
      <label for="number">Fecha y Hora de descargue</label>
      <input class="form-control" type="datetime-local" name="fechadescargue" id="fechadescargue">
    </div>

      <button class="btn btn-primary" onclick="crearServicio()">Crear Servicio</button> 

    </div>

    <!-- importacion -->
    <div class="container" id="importacion">
      <br>
      
      <div class="form-group">
        <label for="option">Tipo de Carga</label>
        <select class="form-control" name="t_cargai" id="t_cargai">
          <option> Contenedor(FCL) </option>
          <option>Suelta (LCL)</option>
        </select>
      </div>

      <div class="form-group">
        <label for="option">Tipo de Contenedor</label>
        <select class="form-control" name="t_cargai" id="t_cargai">
          <option>20</option>
          <option>40</option>
          <option>HC</option>
          <option>Flack Rack</option>
          <option>Open Top</option>
        </select>
      </div>

      <div class="form-group">
        <label for="number">Peso(TN)</label>
        <input class="form-control" id="pesoi" name="pesoi" type="number" >
      </div>
      <div class="form-group">
        <label for="number">Direccion Origen</label>
        <input class="form-control" id="dir_origen_impo" name="dir_origen_impo" type="number" >
      </div>      
      <div class="form-group">
        <label for="number">Origen</label>
        <select class="form-control" name="origen_impo" id="origen_impo">

        </select>
      </div>
      <div class="form-group">
        <label for="number">Direccion Destino</label>
        <input class="form-control" id="dir_destinoI" name="dir_destinoI" type="text" >
      </div>
      <div class="form-group">
        <label for="number">Destino</label>
        <select class="form-control" name="destino_impo" id="destino_impo">

        </select>
      </div>
      <div class="form-group">
        <label for="option">Instrucciones de despacho</label>
        <select class="form-control" name="instruccioneI" id="instruccioneI">
          <option>ITR</option>
          <option>Dev</option>
          <option>Drop Off</option>
        </select>
      </div>

    <div class="form-group">
      <label for="number">Fecha de entrea de documentos</label>
      <input class="form-control" type="date" name="fechadocumentosI" id="fechadocumentosI">
    </div> 

    <div class="form-group">
      <label for="number">Fecha de llegada a destino</label>
      <input class="form-control" type="date" name="fechallegadaI" id="fechallegadaI">
    </div>
    <div class="form-group">
      <label for="number">Fecha dev vacio</label>
      <input class="form-control" type="date" name="fechallegadaI" id="fechallegadaI">
    </div>

    <div class="form-group">
      <label for="number"> <b> Datos de Agente de Aduana </b></label>
    </div>    

    <div class="form-group">
      <label for="number">Agente</label>
      <input class="form-control" id="agente_aduana" name="agente_aduana" type="text">
    </div>

    <div class="form-group">
      <label for="number">Contacto</label>
      <input class="form-control" id="Contacto_aduana" name="Contacto_aduana" type="text">
    </div>

    <div class="form-group">
      <label for="number">Telefono</label>
      <input class="form-control" id="tel_aduana" name="tel_aduana" type="text">
      </div>  
    <button class="btn btn-primary" >Crear Servicio Importacion</button> 

  </div>

<!-- Exportacion -->
    <div class="container" id="Exportacion">
      <br>

    <div class="form-group">
      <label for="number">Fecha de cargue</label>
      <input class="form-control" type="date" name="fechacargueE" id="fechacargueE">
    </div> 

    <div class="form-group">
      <label for="number">Fecha de llegada destino (ETA)</label>
      <input class="form-control" type="date" name="fechadestinoE" id="fechadestinoE">
    </div> 

      <div class="form-group">
        <label for="option">Tipo de Contenedor</label>
        <select class="form-control" name="t_contenedorE" id="t_contenedorE">
          <option>20</option>
          <option>40</option>
          <option>HC</option>  
          <option>Flack Rack</option> 
          <option>Open Top</option>           
        </select>
      </div>

      <div class="form-group">
        <label for="number">Peso(TN)</label>
        <input class="form-control" id="pesoE" name="pesoE" type="number" >
      </div>
      <div class="form-group">
        <label for="number">Direccion Origen</label>
        <input class="form-control" id="dir_expo_origen" name="dir_expo_origen">
      </div>      
      <div class="form-group">
        <label for="number">Origen</label>
        <select class="form-control" name="origen_expo" id="origen_expo">
           
        </select>      
      </div>
      <div class="form-group">
        <label for="number">Peso(TN)</label>
        <input class="form-control" id="pesoE" name="pesoE" type="number" >
      </div>
      <div class="form-group">
        <label for="number">Direccion Destino</label>
        <input class="form-control" id="dir_expo_destino" name="dir_expo_destino">
      </div> 
      <div class="form-group">
        <label for="number">Destino</label>
        <select class="form-control" name="destino_expo" id="destino_expo">
         
        </select>
      </div>
      <div class="form-group">
        <label for="number">Carta de autorizacion retiro</label>
        <input class="form-control" id="cartaAutoE" name="cartaAutoE" type="file" >
      </div>

      <div class="form-group">
        <label for="number">Booking</label>
        <input class="form-control" id="destinoE" name="destinoE" type="file" >
      </div>

      <div class="form-group">
        <label for="number">Fecha de entrea de documentos</label>
        <input class="form-control" type="date" name="fechadocumentosI" id="fechadocumentosI">
      </div>

    <div class="form-group">
      <label for="number"> <b> Datos de Agente de Aduana </b></label>
    </div>    

    <div class="form-group">
      <label for="number">Agente</label>
      <input class="form-control" id="agente_aduanaE" name="agente_aduanaE" type="text">
    </div>

    <div class="form-group">
      <label for="number">Contacto</label>
      <input class="form-control" id="Contacto_aduanaE" name="Contacto_aduanaE" type="text">
    </div>

    <div class="form-group">
      <label for="number">Telefono</label>
      <input class="form-control" id="tel_aduanaE" name="tel_aduanaE" type="text">
      </div>  
    <button class="btn btn-primary">Crear Servicio Exportacion</button> 

  </div>


  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">Entre en contacto con nosotros!</h2>
          <hr class="my-4">
          <p class="mb-5">Cuéntanos cómo ha sido tu experiencia con nuestra solución. Regálanos una llamada o envíanos un correo y nos pondremos en contacto en el menor tiempo posible!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 ml-auto text-center">
          <i class="fa fa-phone fa-3x mb-3 sr-contact"></i>
          <p>Bogotá.DC, 777-7777</p>
        </div>
        <div class="col-lg-4 mr-auto text-center">
          <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
          <p>
            <a href="mailto:your-email@your-domain.com">servicioalcliente@ekokarga.com</a>

          </div>
        </div>



      </section>
      <section class="bg-dark">
        <div class="container text-center">
          <h7 class="mb-4">©2018 - Eko Karga / Todos los derechos reservados.</h2>
          </div>
        </section>

        <!-- Bootstrap core JavaScript -->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Plugin JavaScript -->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="vendor/scrollreveal/scrollreveal.min.js"></script>
        <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

        <!-- Custom scripts for this template -->
        <script src="js/creative.min.js"></script>

      </body>

      </html>
