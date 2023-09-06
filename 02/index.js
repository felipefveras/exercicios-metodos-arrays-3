const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const valorArray = cidades.reduce((acumulador, elementoAtual, indice, array) => {
    let maior = acumulador
    if (elementoAtual.length > acumulador.length) {
        maior = elementoAtual
    }
    return maior
});

console.log(valorArray)