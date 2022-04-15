function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado !== 'f' && sexoIngresado !== 'm')
{
	alert("Ingrese un valor válido");
	sexoIngresado = prompt("ingrese f ó m .");
}
	txtIdSexo.value=sexoIngresado;
}