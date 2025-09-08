<!DOCTYPE HTML>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Taller Web I</title>

    <!-- Boostrap core css -->
    <link rel="stylesheet" th:href="@{/webjars/bootstrap/5.2.0/css/bootstrap.min.css}"/>

    <!-- custom style -->
    <link rel="stylesheet" th:href="@{/css/main.css}"/>

</head>

<body>
<h1>hola</h1>
<a th:href="@{/home.html}" class="btn btn-primary">Ir a Home</a>

<!-- Boostrap core js -->
<script type="text/javascript" th:src="@{webjars/bootstrap/5.2.0/js/bootstrap.min.js}"></script>
<script type="module" th:src="@{js/login.js}"></script>
</body>
</html>