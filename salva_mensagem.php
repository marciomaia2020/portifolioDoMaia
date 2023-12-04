<?php
	// Call archive (conexao.php)
	include_once('conexao.php');
	
	// Receive the data  
	$primeiroNome = $_POST['primeiroNome'];
	$ultimoNome = $_POST['ultimoNome'];
	$email = $_POST['email'];
	$paiz = $_POST['paiz'];
	$mensagem = $_POST['mensagem'];
		
	
/*
// Testing insert data into the table
$sql = "INSERT INTO meusvisitantes (primeiroNome, ultimoNome, email, paiz, mensagem)
VALUES ('$primeiroNome', '$ultimoNome', '$email', '$paiz', '$mensagem')";
*/


$sql = "INSERT INTO meusvisitantes (primeiroNome, ultimoNome, email, paiz, mensagem) 
VALUES ('$primeiroNome','$ultimoNome','$email','$paiz','$mensagem')";



if ($conn->query($sql) === TRUE) {
  echo "Novo registro criado com sucesso!";
} else {
  echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>


