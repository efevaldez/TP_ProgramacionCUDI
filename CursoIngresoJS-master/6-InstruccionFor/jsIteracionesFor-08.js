function mostrar()
{
	var numero;
	var contadorDeDivisores = 0;

	numero = prompt('Ingrese un número: ');

	numero = parseInt(numero);

	document.write(`Se ingreso el número: ${numero} <br>`);

	for(let anterior = 2; anterior < numero; anterior++)
	{
		if (numero % anterior == 0)
		{	
			document.write(`El número es divisible por: ${anterior} <br>`);
			contadorDeDivisores++;
		}
		if (anterior > (numero / 2))
		{
			break;
		}
	}

	if (contadorDeDivisores == 0)
	{
		document.write(`El número es primo`);
	}
	else
	{
		document.write(`El número no es primo, es divisible por ${contadorDeDivisores} y ${numero}`);
	}
}