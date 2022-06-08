var lanzaDado = function (tamañoDado) {
	return Math.ceil(tamañoDado * Math.random())
}

var dadoUno
var dadoDos
var suma
var leyenda
var contador = 1

//for (var contador=1;contador<4;contador=contador+1){

while (contador < 4) {
	dadoUno=lanzaDado(6)
	dadoDos=lanzaDado(6)
	console.log('Juego de dados..... Intento número: ' + contador)

	while (dadoUno < 3) {
		console.log('El Dado Uno cayó en ' + dadoUno + '... Como es menor a 3, se repite el tiro')
		dadoUno = lanzaDado(6)
	}
	while (dadoDos < 3) {
		console.log('El Dado Dos cayó en ' + dadoDos + '... Como es menor a 3, se repite el tiro')
		dadoDos = lanzaDado(6)
	}
	suma = dadoUno + dadoDos
	if (suma == 7 || suma == 11) { leyenda = '... Buen tiro, ganaste!!' }
	else {
		if (suma == 4) { leyenda = '... Perdiste' }
		else { leyenda = '... Este número no gana ni pierde. Vuelve a tirar' }
	}



	console.log('Dado uno: ' + dadoUno)
	console.log('Dado dos: ' + dadoDos)
	console.log('Suma: ' + suma + leyenda)
	contador = (contador + 1)
}
