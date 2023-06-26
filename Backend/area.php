<?php
    require('conexao.php');

    $buscar = $conn->prepare("SELECT * FROM area");

    $buscar->execute();

    $result=$buscar->fetchAll();
    //echo("<pre>");

   print_r(json_encode($result));
?>