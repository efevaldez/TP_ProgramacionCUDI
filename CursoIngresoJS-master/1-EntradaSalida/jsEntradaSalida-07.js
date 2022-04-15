/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = parseInt(txtIdNumeroUno.value)
	var numeroDos = parseInt(txtIdNumeroDos.value)
	var sumar = numeroUno + numeroDos
	alert(`El resultado de la suma es ${sumar}`);	
}

function restar()
{
	var numeroUno = parseInt(txtIdNumeroUno.value)
	var numeroDos = parseInt(txtIdNumeroDos.value)
	var restar = numeroUno - numeroDos
	alert(`El resultado de la resta es ${restar}`);	
}
	

function multiplicar()
{ 
	var numeroUno = parseInt(txtIdNumeroUno.value)
	var numeroDos = parseInt(txtIdNumeroDos.value)
	var multiplicar = numeroUno * numeroDos
	alert(`El resultado de la multiplicación es ${multiplicar}`);	
}
	


function dividir()
{
	var numeroUno = parseInt(txtIdNumeroUno.value)
	var numeroDos = parseInt(txtIdNumeroDos.value)
	var dividir = numeroUno / numeroDos
	alert(`El resultado de la división es ${dividir}`);	
}
	


