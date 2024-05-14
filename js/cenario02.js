// Controle de Fluxo // 

// Sendo um cliente correntista do banco -- Sendo(Ator)
// Posso sacar dinheiro em caixas eletrônicos -- Posso(Que identifica o que deve ser desenvolvido)
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito -- Para(O valor agregado da funcionalidade)

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta infomando que o valor é superior ao saldo

var saldo = 1000 // Dado que meu saldo é de 1000 reais

function saque(valor) {
    if (valor > saldo) {    
        console.log('Valor solicitado é superior ao saldo')
        //alert('Seu saldo é de R$' + saldo + ' ! E o valor solicitado é de R$' + valor + ' ou seja superior ao saldo') //  deve mostrar uma mensagem de alerta infomando que o valor é superior ao saldo
    } else {
       saldo = saldo - valor
    }
}

saque(1001) // Quando faço um saque de 1001 reais

console.log(saldo)