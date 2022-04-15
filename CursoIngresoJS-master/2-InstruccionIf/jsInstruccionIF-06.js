function mostrar()
{
	var edad = parseInt(txtIdEdad.value);
	if(edad < 13){
		alert('La persona es un/a niño/a')
	}else if(edad >= 13 && edad <= 17){
		alert('La persona es un/a adolescente')
	}else{
		alert('La persona es mayor de edad')
	}
}