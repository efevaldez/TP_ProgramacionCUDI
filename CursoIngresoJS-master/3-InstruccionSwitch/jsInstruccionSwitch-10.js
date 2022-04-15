function mostrar() {
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;

	switch (estacionIngresada) {
		case 'Invierno':
			if (destino == 'Bariloche') {
				alert('Se viaja')
			} else {
				alert('No se viaja')
			}
			break;
		case 'Verano':
			if (destino == 'Mar del plata' || destino == 'Cataratas') {
				alert('Se viaja')
			} else {
				alert('No se viaja')
			}
			break;
		case 'Primavera':
			if (destino == 'Bariloche') {
				alert('No se viaja')
			} else {
				alert('Se viaja')
			}
			break;
		default:
			alert('Se viaja')
			break;
	}
}