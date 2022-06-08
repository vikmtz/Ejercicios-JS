var dado = {
	tamaño:6,
	tirosTotales:1,
	tiro: function(){
		var resultado=Math.ceil(this.tamaño * Math.random())
		this.tirosTotales += 1;
	return resultado;
	}
}
console.log ('  ')
console.log ('Los componentes de la variable "dado" son: ')
console.log (dado)
console.log ('  ')
//dado.tamaño=10
console.log ('Tamaño del dado: '+dado.tamaño)

console.log ('Tiro número: '+dado.tirosTotales)
console.log(dado.tiro())
console.log ('Tiro número: '+dado.tirosTotales)
console.log(dado.tiro())
console.log ('Tiro número: '+dado.tirosTotales)
console.log(dado.tiro())


console.log ('Total de tiros: '+(dado.tirosTotales-1))