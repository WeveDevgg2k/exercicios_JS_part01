const comprimento = prompt("Digite o valor do comprimento da área:")
const largura = prompt("Digite o valor da largura da área:")

function calcArea(comprimento, largura) {
  return comprimento * largura
}

function calcPerimetro(comprimento, largura) {
  return 2 * (comprimento + largura)
}

const area = calcArea(comprimento, largura)
const perimetro = calcPerimetro(comprimento, largura)

console.log(`A área do retângulo é igual a ${area}`)
console.log(`O perímetro do retângulo é igual a ${perimetro}`)