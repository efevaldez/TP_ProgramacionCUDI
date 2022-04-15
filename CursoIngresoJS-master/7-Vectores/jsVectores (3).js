function mostrar()
{
	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt('Ingrese números'));
	}

	for(var i=0; i<5; i++)
	{

		document.write(`Posición ${i} : ${miArray[i]} <br>`);
	}
}