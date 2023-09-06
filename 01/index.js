//Usando o método `sort()` resolva as seguintes questões:

//**a)** Ordenar o array abaixo em ordem crescente.


const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numeros.sort(function (a, b) {
    return a - b
})
console.log(numeros)
//**b)** Ordenar o array abaixo em ordem decrescente.


const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numeros.sort(function (a, b) {
    return b - a
})
console.log(numeros)
//**c)** Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.


const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
console.log(numeros.sort())

//**d)** Ordenar o array abaixo em ordem alfabética.


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort(function (a, b) {
    return a.localeCompare(b)
})
console.log(frutas)
//**e)** Ordenar o array abaixo em ordem alfabética decrescente.


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort(function (a, b) {
    return b.localeCompare(a)
})
console.log(frutas)

//**f)** Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort(function (a, b) {
    return a.length - b.length
})
console.log(frutas)