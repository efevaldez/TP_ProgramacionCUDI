/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0;

	respuesta = "si";

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		numeros[pos] = numeroIngresado;
		pos++;

		//1-Suma de los negativos.
		if (numeroIngresado < 0) {
			sumaNegativos = sumaNegativos + numeroIngresado;
		}

		//2-Suma de los positivos.
		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
		}

		//3-Cantidad de positivos.
		if (numeroIngresado > 0) {
			cantidadPositivos++;
		}

		//4-Cantidad de negativos.
		if (numeroIngresado < 0) {
			cantidadNegativos++;
		}

		//5-Cantidad de ceros.
		if (numeroIngresado == 0) {
			cantidadCeros++;
		}

		//6-Cantidad de números pares.
		var resto = numeroIngresado % 5;
		if (resto == 0) {
			cantidadPares++;
		}
		respuesta = prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :" + sumaNegativos);
	document.write("1-Suma de los negativos." + sumaNegativos);
	document.write("2-Suma de los positivos." + sumaPositivos);
	document.write("3-Cantidad de positivos." + cantidadPositivos);
	document.write("4-Cantidad de negativos." + cantidadNegativos);
	document.write("5-Cantidad de ceros." + cantidadCeros);
	document.write("6-Cantidad de números pares." + cantidadPares);
	document.write("7-Promedio de positivos." + promedioPositivos);
	document.write("8-Promedios de negativos." + promedioNegativos);
	document.write("9-Diferencia entre positivos y negativos, (positvos-negativos)." + diferencia);
}//FIN DE LA FUNCIÓN

//7-Promedio de positivos.
var promedioPositivos = sumaPositivos / cantidadPositivos;

//8-Promedios de negativos.
var promedioNegativos = sumaNegativos / cantidadNegativos;

//9-Diferencia entre positivos y negativos, (positivos-negativos).
var diferencia = sumaPositivos - sumaNegativos;
