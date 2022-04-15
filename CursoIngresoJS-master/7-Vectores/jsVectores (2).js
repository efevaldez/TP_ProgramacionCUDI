function mostrar()
{
	var miArray = new Array();

	miArray[0]="Juan";
	miArray[1]="Ana";
	miArray[2]="Anahí";
	miArray[3]="Amelie";
	miArray[4]="Claudia";


document.write(`El contenido del vector es: <br>`);

	for(var i=0; i<5; i++)
	{
		document.write(`Posicion ${i} : ${miArray[i]} <br>`);
	}
}