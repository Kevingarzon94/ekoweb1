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
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css    " rel="stylesheet">
    
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

    
    <!-- Custom fonts for this template -->

    <!-- Custom styles for this template -->
    <link href="css/creative03.min.css" rel="stylesheet">


  </head>

  <body id="page-top">
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
            <a class="nav-link js-scroll-trigger" href='index.php?CodeInt=<?php echo $_SESSION["CodeInt"];?>'>Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="servicios.php">Consulta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="formulario.php">Nuevo Servicio</a>
            </li>
            <li class="nav-item">
              <a style="color: green;" class="nav-link js-scroll-trigger" href="historial.php">Historial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="Login/index.html">Salir</a>
            </li>
      </ul>
        </div>
      </div>
    </nav>


    
    <section class="bg-primary" id="about">
         <div class="container">
               <div class="row">
                   <div class="col-lg-8 mx-auto text-center">
                      <h2 class="section-heading text-white">Historial.</h2>
                      <hr class="light my-4">
                      <p class="text-faded mb-4">Realice la búsqueda por estado del servicio.</p>
                  
                   
                      <div id="toolbar">
                <select class="form-control" name="estado" id="estado" onchange="getData()">
                    <option>  </option>
                    <option value="6311625"> Creado </option>
                    <option value="6948340"> En Asignación </option>
                    <option value="6957915"> Confirmado </option>
                    <option value="7590913"> Cumplió </option>
                </select>
                      </div>
                    </div>
              <div class="form-group">

              </div>
              <br>
                      <div class="container">
                      <table id="example" class="display" width="100%"></table>
                    </div>
                   </div>
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

      <section class="bg-dark">
            <div class="container text-center">
               <h7 class="mb-4">©2018 - Eko Karga / Todos los derechos reservados.</h2>
            </div>
      </section>

    <script  src="index.js"></script>


  </body>

</html>
