function mostrar() {
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") {
		alert("Clave incorrecta, reintente");
		claveIngresada = prompt('ingrese el número clave');
	}
	alert("OK!");

}
