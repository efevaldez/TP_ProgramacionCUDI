function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var tarifa = 15000;

	switch (estacionIngresada) {
		case 'Invierno':
			if(destino == 'Bariloche'){
				alert(tarifa + (tarifa * 20) / 100)
			}
			if(destino == 'Cataratas' || destino == 'Cordoba'){
				alert(tarifa - (tarifa * 10) / 100)
			}
			if(destino == 'Mar del plata'){
				alert(tarifa - (tarifa * 20) / 100)
			}
			break;
		case 'Verano':
			if(destino == 'Bariloche'){
				alert(tarifa - (tarifa * 20) / 100)
			}
			if(destino == 'Cataratas' || destino == 'Cordoba'){
				alert(tarifa + (tarifa * 10) / 100)
			}
			if(destino == 'Mar del plata'){
				alert(tarifa + (tarifa * 20) / 100)
			}
			break;
		case 'Otoño':
		case 'Primavera':
			if(destino == 'Bariloche' || destino == 'Cataratas' || destino == 'Mar del plata'){
				alert(tarifa + (tarifa * 10) / 100)
			}else{
				alert(tarifa)
			}
			break;
	}
}