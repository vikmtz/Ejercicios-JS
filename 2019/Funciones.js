//var value=6*Math.random();
//var roll=Math.ceil(value);
//console.log (roll);

var lanzaDado = function(tamañoDado){
	return Math.ceil(tamañoDado*Math.random())
}

//var dadoUno=Math.ceil(6*Math.random())
//var dadoDos=Math.ceil(6*Math.random())

var tamañoDadoUno=process.argv[2]
var dadoUno=lanzaDado(tamañoDadoUno)
console.log ('El tamaño del Dado uno es: '+tamañoDadoUno)

//var tamañoDadoDos=6
//var dadoDos=lanzaDado(tamañoDadoDos)
//console.log ('El tamaño del Dado dos es: '+tamañoDadoDos)


console.log ('Lanzamiento de dados....')
console.log('Dado uno: '+dadoUno)
//console.log('Dado dos: '+dadoDos)
//console.log('Suma ambos: '+(dadoUno+dadoDos))
