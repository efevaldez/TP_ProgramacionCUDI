/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
// */
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';
	var numero;
	var promedio;

	while (respuesta == 'si') {
		numero = prompt('Ingrese un número:')
		numero = parseInt(numero)

		acumulador = acumulador + numero;
		contador++

		respuesta = 'Desea continuar la suma? SI/NO'
	}
	promedio = acumulador / contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}



