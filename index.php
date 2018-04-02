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
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>

  <!-- Custom fonts for this template -->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

  <!-- Plugin CSS -->
  <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">
  <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet">  
  <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
  <!-- Custom styles for this template -->
  <link href="css/creative.min.css" rel="stylesheet">
  <script src="controller/index.js"></script>

</head>

<body id="page-top" onload="sessionId()">

  <?php
  
  $_SESSION["CodeInt"]=$_GET["CodeInt"];
  

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
              <a style="color: green;" class="nav-link js-scroll-trigger" href='index.php?CodeInt=<?php echo $_SESSION["CodeInt"];?>'>Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="servicios.php">Consulta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="formulario.php">Nuevo Servicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="historial.php">Historial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="Login/index.html">Salir</a>
            </li>
      </ul>
    </div>
  </div>
</nav>

<header class="masthead text-center text-white d-flex">
  <div class="container my-auto">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h1 class="text-uppercase">
          <strong>Su negocio nunca se detiene!</strong>
        </h1>
        <hr>
      </div>
      <div class="col-lg-8 mx-auto">
        <p class="text-faded mb-5"> - Eko Karga -  el Sistema de Gestión de Transporte de Carga, ideal para mejorar su operación y la de sus clientes.</p>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="servicios.php">Consultas</a>
      </div>
    </div>
  </div>
</header>

<section class="bg-primary" id="about">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="section-heading text-white">Perfil de Usuario.</h2>
        <hr class="light my-4">
        <p class="text-faded mb-4">A continuación encontrará la información del cliente. Le recordamos que la información debe editarla desde la plataforma y algunos datos son inmodificables por el usuario / cliente.</p>
        <div style="width:50%; float:left;">

      <div class="form-group"> 
            <label for="number">Razón Social</label>
            <input class="form-control" style="text-align: center" id="razon_social" name="razon_social" type="text" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="number">Telefono de contacto</label>
            <input class="form-control" style="text-align: center" id="tel" name="tel" type="text" readonly="readonly">
          </div>   
        </div> 
        <div style="width:50%; float:left;">
          <div class="form-group">
            <label for="number">Dirección</label>
            <input class="form-control" style="text-align: center" id="dir_c" name="dir_c" type="text" readonly="readonly">
          </div>   

        </div>

    
      </div>
      <div class="container" align="center">
        <h2 class="section-heading text-white">Contactos</h2>

                      <table id="example" class="display" width="100%"></table>
        </div> 
    </div>

  </div>
</section>

</section>
<section class="bg-dark">
  <div class="container text-center">
    <h2 class="mb-4">Tarifas!</h2>
  </div>
  <div class="container">
  <div class="table-responsive">
    <table class="table" id="grid">
      <tr>
        <th width="30%">Origen</th>
        <th width="30%">Destino</th>
        <th width="30%">Configuración del vehículo</th>
        <th width="50%">Tarifa</th>
      </tr>
      <tbody id="ProSelected">
        <tr>

        </tr>
      </tbody>
    </table>
  </div>
  </div>
</section>

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
        <p>Bogotá, 777-454-7777</p>
      </div>
      <div class="col-lg-4 mr-auto text-center">
        <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
        <p>
          <a href="mailto:your-email@your-domain.com">servicioalcliente@ekokarga.com</a>
        </p>
      </div>
    </div>
  </div>
</section>

</section>
<section class="bg-dark">
  <div class="container text-center">
    <h7 class="mb-4">©2018 - Eko Karga / Todos los derechos reservados.</h2>
    </div>
  </section>

</body>

</html>
