<?php

    try {
        $conn = new PDO('mysql:host=localhost;dbname=_sgfilas_v1_2','root','');
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    
    catch (PDOException $warning) {
        echo "Ocorreu um erro no: {$warning->getMessage()}";
    }
?>