function mostrar()
{
	var edad = parseInt(txtIdEdad.value);
	var estadoCivil = document.getElementById('estadoCivil').value;

	if(edad >= 18 && estadoCivil === 'Soltero'){
		alert('Es soltero y no es menor')
	}
}