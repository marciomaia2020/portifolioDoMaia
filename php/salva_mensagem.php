<?php
	// Call archive (conexao.php)
	include_once('conexao.php');
	
	// Receive the data  
	$primeiroNome = $_GET['primeiroNome'];
	$ultimoNome = $_GET['ultimoNome'];
	$email = $_GET['email'];
	$paiz = $_GET['paiz'];
	$mensagem = $_GET['mensagem'];
		
	
	
// Testing insert data into the table
$sql = "INSERT INTO meusvisitantes (primeiroNome, ultimoNome, email, paiz, mensagem)
VALUES ('$primeiroNome', '$ultimoNome', '$email', '$paiz', '$mensagem')";



if ($conn->query($sql) === TRUE) {
  echo "Novo registro criado com sucesso!";
} else {
  echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>


