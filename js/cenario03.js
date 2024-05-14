// Controle de Fluxo // 

// Sendo um cliente correntista do banco -- Sendo(Ator)
// Posso sacar dinheiro em caixas eletrônicos -- Posso(Que identifica o que deve ser desenvolvido)
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito -- Para(O valor agregado da funcionalidade)

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// Como eu fiz
var saldo = 1000                // Dado que meu saldo é de 1000 reais
var valorOperacao = 700         // E o valor máximo por operação é de 700 reais

function saque(valor) {
    if (valor > saldo) {
        console.log('Valor solicitado é superior ao saldo')
    } else if (valor > valorOperacao) {
        //alert('O valor máximo de operação é de R$' + valorOperacao)
        console.log('O valor do saque é superior ao máximo permitido por operação')
    } else {
        saldo = saldo - valor
 }
}

saque(701) // Quando faço um saque no valor de 701 reais

console.log(saldo)

// Como o professor fez
var saldo = 1000                // Dado que meu saldo é de 1000 reais

function saque(valor) {
    if (valor > saldo) {
        console.log('Valor solicitado é superior ao saldo')
    } else if (valor > 700) {
        //alert('O valor máximo de operação é de R$' + valorOperacao)
        console.log('O valor do saque é superior ao máximo permitido por operação')
    } else {
        saldo = saldo - valor
 }
}

saque(701) // Quando faço um saque no valor de 701 reais

console.log(saldo)
