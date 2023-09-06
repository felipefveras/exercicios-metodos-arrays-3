const numeros = [1, 466, -76, 0, 12, 19, 5, 112, 1000]

const maiorNumero = numeros.reduce(function (acumulador, elementoAtual) {
    let maior = acumulador
    if (acumulador < elementoAtual) maior = elementoAtual
    return maior
})

console.log(maiorNumero)