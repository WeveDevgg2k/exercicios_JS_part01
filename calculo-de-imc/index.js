const height = prompt('Qual é a sua altura?')
const weight = prompt('Qual é o seu peso?')

function calcularIMC(height, weight) {
  return (weight / (height * height)).toFixed(2)
}

const imc = calcularIMC(height, weight)

alert(`O seu IMC é ${imc}`)