function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero < 0 || numero > 9)
	{
		alert("Ingrese un número válido");
		numero = prompt("ingrese un número entre 0 y 10.");
	}
	document.getElementById('txtIdNumero').value = numero;
}
