function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
		case 'Bariloche':
		case 'Ushuaia':
			alert('Sur')
			break;
		case 'Cataratas':
			alert('Noreste')
			break;
			case 'Mar del plata':
				alert('Este')
				break;
	}
}