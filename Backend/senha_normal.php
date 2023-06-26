<?php
    require('conexao.php');

    if (isset($_POST)) {
        # code...
        $data = file_get_contents("php://input");

        $value = json_decode($data, true);

        $tipo_servico = $value["Tipo"];
        $senha_total = $value['Senha'];

        $consulta = $conn->prepare("SELECT * FROM senha_normal WHERE tipo_servico='$tipo_servico'");
        //$consulta->bindValue(':tipo_servico',$tipo_servico);

        $consulta->execute();

        if ($consulta->rowCount() > 0) {
         
            $actualizar = $conn->prepare("UPDATE senha_normal SET senhas_total ='$senha_total' WHERE tipo_servico='$tipo_servico'");
            $actualizar->execute();

        } else {
            # code...
            $inserir = $conn->prepare("INSERT INTO senha_normal(tipo_servico, senha_total) values(:tipo_servico, :senha_total)");
            
            $inserir->bindValue(':tipo_servico',$tipo_servico);
            $inserir->bindValue(':senha_total',$senha_total);

            $inserir->execute();
        } 
    }
?>