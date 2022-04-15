/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = [];
	
		numeroIngresado[banderaDelPrimero] = prompt("Ingrese un numero");
		
		respuesta = prompt("¿Desea continuar?","si/no");
		banderaDelPrimero++;

		
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else (numeroIngresado < numeroMinimo) 
			{
				numeroMinimo = numeroIngresado;
			}
		}
	
	
		
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;	
	}
	
//FIN DE LA FUNCIÓN



	
