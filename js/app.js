console.log('Olá, Javascript!')

var userName = 'Kira'

document.getElementById('user-name').innerHTML = userName

// Variáveis //

/*var nome ='Meste Yoda'
var idade = 100
var jedi = true

console.log(typeof nome, typeof idade, typeof jedi)*/

// Operadores Matemáticos //

/*var n1 = typeof 5
var n2 = typeof'5' // ele acaba concatenando, juntando 5 com 5 = 55

var total = n1 + (n2)

console.log(total)

*/

/*var n1 = 5
var n2 = '5' 

var total = n1 + parseInt(n2) // Colocando o paserInt ele faz uma conversão de String para Int

console.log(total) */

var n1 = 7
var n2 = 2.5 

console.log(typeof n1)
console.log(typeof n2)

var total = n1 + n2 
var total1 = n1 * n2
var total2 = n1 - n2
var total3 = n1 / n2

console.log(total, total1, total2, total3)

// --------------------------------------------------------------- // 

// Operadores de Comparação // 

var v1 = 5
var v2 = 5
var v3 = '5'

var resultado = v1 === v2
var resultado1 = v1 === v3 // com 3 "iguais ===" ele leva em conta o tipo do dado
var resultado2 = v1 == v2 // com 2 "iguais ==" ele só verifica se é o mesmo valor
var resultado3 = v1 != v2 // Dessa forma ele não leva em consideração o tipo do dado, sendo assim retorna false que não são diferentes
var resultado4 = v1 !== v3 // Dessa forma ele leva em consideração o tipo do dado, sendo assim retorna trueEles são diferentes
 
console.log(resultado, resultado1, resultado2, resultado3, resultado4)