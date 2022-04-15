function mostrar()
{
	var nota = Math.round(Math.random() * 10)
	
	if(nota < 4){
		alert(`${nota} : Vamos, la próxima se puede`)
	}else if(nota >= 4 && nota <= 8){
		alert(`${nota}: Aprobó`)
	}else{
		alert(`${nota} : Excelente`)
	}
}