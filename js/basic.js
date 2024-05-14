console.log('Olá, Javascript!')

var userName = 'Kira'

document.getElementById('user-name').innerHTML = userName


// Variáveis //

var nome ='Meste Yoda'
var idade = 100
var jedi = true

console.log(typeof nome, typeof idade, typeof jedi)

// *********************************************************************** //

// Operadores Matemáticos //

var n1 = 5
var n2 = '5' // ele acaba concatenando, juntando 5 com 5 = 55

var total = n1 + (n2)

console.log(total)


var n1 = 5
var n2 = '5' 

var total = n1 + parseInt(n2) // Colocando o paserInt ele faz uma conversão de String para Int

console.log(total) 

var n1 = 7
var n2 = 2.5 

console.log(typeof n1)
console.log(typeof n2)

var total = n1 + n2 
var total1 = n1 * n2
var total2 = n1 - n2
var total3 = n1 / n2

console.log(total, total1, total2, total3)

// *********************************************************************** //

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

// *********************************************************************** //

// Funções //

function somar(n1, n2) {
    console.log(n1+n2)
}

somar(5,105)

function boasVindas(nome) {
    alert(nome + ', Seja bem-vindo(a)')
}

boasVindas('Kira')

// ************************************************** */

function soma(n3, n4) { // CTRL + Barra(botão que tem o ponto de interrogação junto)
    return n3 + n4
}

var resultado = soma(5,5)

console.log(resultado)

// ************************************************************** // 

// Arrays // 

// Sendo um cliente correntista do banco -- Sendo(Ator)
// Posso sacar dinheiro em caixas eletrônicos -- Posso(Que identifica o que deve ser desenvolvido)
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito -- Para(O valor agregado da funcionalidade)


var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos'] // Posições 

console.log(gaveteiro[3])

// *************************************** //

var personagens = ['Meste Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

console.log(typeof personagens) // Tipagem de dados é um objeto, mas na prática é um Array, podemos chamar também de Array de Listas

personagens.push('C3pO') // push adiciona mais um personagem na lista

console.log(personagens)

personagens.pop() // pop remove o último da lista, caso não seja enviado nenhum valor

console.log(personagens)

personagens.push('R2D2') // push adiciona mais um personagem na lista

console.log(personagens)

personagens.pop('R2D2') // pop remove um valor da lista

console.log(personagens)

// ****************************************************************************** // 

// Para remover um valor da lista

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3pO')
personagens.push('R2D2')

//personagens.pop()

personagens = personagens.filter(function(p) { // A letra P é a unidade de um personagem
    return p !== 'Darth Vader'
})


personagens = personagens.filter(function(p) { // A letra P é a unidade de um personagem
    return p === 'Mestre Yoda'
})


console.log(personagens)

// ****************************************************************** //

// Controles de repetição (Loops ou Laços de repetição)

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.forEach(function(p){ // forEach lista os dados um a um
    console.log(p)
})

for (var i in personagens) { // i(índice) da o número da posição e não o valor
    console.log(i)
}

for (var i in personagens) { // i(índice) da o número da posição e não o valor
    console.log(personagens[i])
}

for (var i = 0; i <= 10; i++) { // 1ª parte (inicialização) -- 2ª parte (condição) -- 3ª parte (incremento)
    console.log(i)
    // Código vai ser executado até a condição retornar false -- i <= 10
}

// Objetos // -- Super variáveis 

var yoda = {}
    yoda.nome = 'Mestre Yoda'
    yoda.idade = 100
    yoda.jedi = true
    yoda.outro_campo = 'alguma coisa'

console.log(yoda)    

var yoda = {
    nome:'Mestre Yoda',
    idade: 100,
    jedi: true,

    mostraIdade: function() {
        //console.log(`A idade do ${yoda.nome} é ${yoda.idade} anos`) // `(Apóstrofe) interpolação de string
        console.log(`A idade do ${this.nome} é ${this.idade} anos!`)
    }

}    

console.log(yoda)   
yoda.mostraIdade()

// ************************************************************************* //

// Constantes // 

const nome1 = 'Darth Vader' // const o valor é imutável
console.log(nome1)



