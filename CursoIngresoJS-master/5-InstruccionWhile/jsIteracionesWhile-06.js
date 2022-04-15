function mostrar()
{
	var contador = 0;
	var acumulador = 0;

	var numero;	
	var promedio;

	while(contador < 5)
	{
		numero = prompt(`Ingrese un número:`);
		numero = parseInt(numero);
		contador++;
		acumulador = acumulador + numero;
	}
	promedio = acumulador / 5;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;
}