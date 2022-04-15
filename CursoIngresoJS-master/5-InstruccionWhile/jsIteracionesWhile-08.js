/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	var numero;

	while(respuesta == "si")
	{
		var numero;
		numero = prompt('Ingrese un número:');
		numero = parseInt(numero);
		
		if(numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numero;
		} 
		respuesta = prompt('Desea continuar con las cuentas? si/no');
		contador++; 
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}