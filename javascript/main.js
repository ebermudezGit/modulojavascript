alert("Hola mundo")

function Validar(){
	confirm("Llamada de function");
};

function ValidarFor () {
	 var numero = prompt("Ingresa un numero para Factorial");
	 var factorial =1;
	 for (var i = 1; i <= numero; i++) {
	 	factorial=factorial*i;
	 }

	 alert("El factorial de "+ numero+" es: "+factorial);
}


function fncodigosinfuncion() {
	var resultado=0;
	var numero1 = 3;
	var numero2 = 5;
			
	//	Se	suman	los	números	y	se	muestra	el	resultado
	resultado = numero1 + numero2;
	alert("El resultado es " + resultado);
			
	numero1 = 10;
	numero2 = 7;
			
	//	Se	suman	los	números	y	se	muestra	el	resultado	
	resultado = numero1 + numero2;
	alert("El resultado es " + resultado);
			
	numero1 = 5;
	numero2 = 8;
			
	//	Se	suman	los	números	y	se	muestra	el	resultado
	resultado = numero1 + numero2;
	alert("El resultado es " + resultado);
}

function fntestSuma(numero1,numero2) {
	var resultado=0;
	
	resultado = numero1 + numero2;
	alert("El resultado es " + resultado);
}

function fncodigoconfuncion() {
	var numero1 = 3;
	var numero2 = 5;
			
	//	Se	suman	los	números	y	se	muestra	el	resultado
	fntestSuma(numero1,numero2);
			
	numero1 = 10;
	numero2 = 7;
			
	//	Se	suman	los	números	y	se	muestra	el	resultado	
	fntestSuma(numero1,numero2);
			
	numero1 = 5;
	numero2 = 8;
			
	//	Se	suman	los	números	y	se	muestra	el	resultado
	fntestSuma(numero1,numero2);
	
}

function fncodigoconfuncionprompt() {
	var numero1 = parseInt(prompt("Primer Numero"));
	var numero2 = parseInt(prompt("segundo Numero"));;
	
	//	Se	suman	los	números	y	se	muestra	el	resultado
	fntestSuma(numero1,numero2);
	
}
