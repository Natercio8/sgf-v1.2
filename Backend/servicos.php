<?php
    require('conexao.php');

    $buscar = $conn->prepare("SELECT * FROM servicos where estado='1'");

    $buscar->execute();

    $result=$buscar->fetchAll();
    //echo("<pre>");

    print_r(json_encode($result));
?>