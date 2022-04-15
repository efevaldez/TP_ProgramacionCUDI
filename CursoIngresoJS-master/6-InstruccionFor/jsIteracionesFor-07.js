function mostrar() {
	var numero;
	var contadorDeDivisores = 0;
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	for (let anterior = 2; anterior < numero; anterior++) {
		if (numero % anterior == 0) {
			document.write(`${anterior} <br>`);
			contadorDeDivisores++;
		}
	}
}