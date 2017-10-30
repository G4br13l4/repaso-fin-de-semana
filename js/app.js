// Obtener ASCII codes al proporcionar de proporcionar un string con los caracteres

var abecedario = "abcdefghijklmnopqrstuvwxyz";
function obtenerAsciiCodes (caracteres)						{
	var arrayConAsciiCodes = [];
	for(var i =0; i < 26; i++) 	  {
		var asciicode= abecedario.charCodeAt(i); //Solo puede dar el ASCII code si el caracter es parte de un string
		arrayConAsciiCodes.push(asciicode);
	}
	return arrayConAsciiCodes;
}
console.log(obtenerAsciiCodes(abecedario));

//Obtener letras del abecedario a partir de que indicar los codigos ASCII

function obtenerCaracteres (asciicode)						{
	var newArray = [];	
	for(var j = 0; j < 26; j++) 						{
	var letra = String.fromCharCode(asciicode + j);
	newArray.push(letra);	
	}				
	return newArray;
}

document.write(obtenerCaracteres(65) + "<br>");
document.write(obtenerCaracteres(97));


