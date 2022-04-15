function mostrar()
{
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño) {
		case 'Febrero':
			alert('Tiene 28 días')
			break;
		case 'Abril': 
		alert('Tiene 30 días')
		break;
		case 'Junio': 
		alert('Tiene 30 días')
		break;
		case 'Septiembre': 
		alert('Tiene 30 días')
		break;
		case 'Diciembre': 
		alert('Tiene 30 días')
		break;
		default:
			alert('Tiene 31 días')
			break;
	}
}