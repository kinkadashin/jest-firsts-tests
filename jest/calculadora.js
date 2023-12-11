function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function mutiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

console.log(soma(2, 2))

module.exports = {
    soma,
    subtracao,
    mutiplicacao,
    divisao
}