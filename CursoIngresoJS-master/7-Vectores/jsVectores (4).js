function mostrar()
{
	var miArray = new Array();
	var suma=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt('Ingrese un número'));
		suma+=miArray[i];

	}

	for(var i=0; i<5; i++)
	{
		document.write(`Posición ${i} : ${miArray[i]} <br>`);
	}
	document.write(`El resultado de la suma de todos los números es: ${suma}`)
}