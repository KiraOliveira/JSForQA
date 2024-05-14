// Controle de Fluxo // 

// Sendo um cliente correntista do banco -- Sendo(Ator)
// Posso sacar dinheiro em caixas eletrônicos -- Posso(Que identifica o que deve ser desenvolvido)
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito -- Para(O valor agregado da funcionalidade)

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

var saldo = 1000 // Dado que meu saldo é de 1000 reais

function saque(valor) {
    saldo = saldo - valor // Então o valor do saque deve ser deduzido do meu saldo
}

saque(500) // uando faço um saque de 500 reais

console.log(saldo)
