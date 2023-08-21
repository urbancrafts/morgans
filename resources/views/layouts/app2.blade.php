<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!-- Mirrored from demo.dashboardpack.com/admindek-html/default/form-validation.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 09 Jun 2021 17:01:49 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>

  </title>
  <!-- HTML5 Shim and Respond.js IE10 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 10]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
      <!-- Meta -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Admindek Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs." />
      <meta name="keywords" content="bootstrap, bootstrap admin template, admin theme, admin dashboard, dashboard template, admin template, responsive" />
      <meta name="author" content="colorlib" />
      <!-- Favicon icon -->
      <link rel="icon" href="../files/assets/images/favicon.ico" type="image/x-icon">
      <!-- Google font-->     <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Quicksand:500,700" rel="stylesheet">
      <!-- Required Fremwork -->
      <link rel="stylesheet" type="text/css" href="{{ asset('files/bower_components/bootstrap/css/bootstrap.min.css')}}">
      <!-- waves.css -->
      <link rel="stylesheet" href="{{ asset('files/assets/pages/waves/css/waves.min.css')}}" type="text/css" media="all">
      <!-- feather icon -->
      <link rel="stylesheet" type="text/css" href="{{ asset('files/assets/icon/feather/css/feather.css')}}">
      <!-- themify-icons line icon -->
      <link rel="stylesheet" type="text/css" href="{{ asset('files/assets/icon/themify-icons/themify-icons.css')}}">
      <!-- ico font -->
      <link rel="stylesheet" type="text/css" href="{{ asset('files/assets/icon/icofont/css/icofont.css')}}">
      <!-- Font Awesome -->
      <link rel="stylesheet" type="text/css" href="{{ asset('files/assets/icon/font-awesome/css/font-awesome.min.css')}}">
      <!-- Style.css -->
      <link rel="stylesheet" type="text/css" href="{{ asset('files/assets/css/style.css')}}">
      <link rel="stylesheet" type="text/css" href="{{ asset('files/assets/css/pages.css')}}">


            @yield('content')
        
