function mostrar()
{
	var numero;
	var contador = 0;
	numero = prompt('Ingrese un número');
	numero = parseInt(numero);
	document.write(`Se ingreso el número: ${numero} <br>`);
		
	for(let i = 1; i != numero + 1; i++)
	{
		if(i % 2 == 0)
		{
			document.write(`Número par: ${i} <br>`);
			contador = contador + 1;
		}
	}
	document.write(`Cantidad de números pares encontrados: ${contador}`);
}