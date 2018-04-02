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
    <link href="css/creative02.min.css" rel="stylesheet">

    <script src="controller/consultarservicio.js"></script>
    <style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

  </head>

  <body id="page-top" onload="sessionId()">
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
              <a style="color: green;" class="nav-link js-scroll-trigger" href="servicios.php">Consulta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="formulario.php">Nuevo Servicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="historial.php">Historial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="salir">Salir</a>
            </li>
      </ul>
        </div>
      </div>
    </nav>
    <section class="bg-primary" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">Servicios.</h2>
            <hr class="light my-4">
            <p class="text-faded mb-4">Consulte y genere sus servicios desde la plataforma sin recurrir a intermediarios!</p>
           
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Consulte sus servicios</h2>
            <hr class="my-4">
            </br>
            <div class="container">
            <div class="form-group">
              </div>
             <div class="form-group" align="center">
                <label>Estado: </label>
                <select class="form-control" style="width: 50%" name="estado" id="estado">
                    <option value="">  </option>
                    <option value="6311625"> Creado </option>
                    <option value="6948340"> En Asignación </option>
                    <option value="6957915"> Confirmado </option>
                    <option value="7590913"> Cumplió </option>
                    <option value="7588018"> En Transito </option>
                </select>
                <br>
                <label>Numero Orden: </label>                
                <input type="text" value="" class="form-control" id="oServicio" style="width: 50%">
              </div> 
           <div class="container">
              <button class="btn btn-default" onclick="viewService()">Buscar</button>
            <div class="form-group" align="center" id="loader-div" style="display: none;">
        <div class="loader"></div>
        </div>
</div>
        <br>
      </div>
            </div>
            </br>
            <div class="table-responsive">
              <table class="table" id="grid">
                <tr>
                  <th>Placa</th>
                  <th>#Servicio</th>
                  <th>Orden de servicio</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>  </th>
                  <th>  </th>
                  <th>  </th>

                </tr>
                <tbody id="ProSelected">

                </tbody>
              </table>

            </div>
          </div>
        </div>

      <div class="container">
        <div class="row">
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
