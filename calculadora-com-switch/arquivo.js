const valor1 = Number(prompt('Informe um valor:'))
const valor2 = Number(prompt('Informe outro valor:'))
const operador = "+"

function calcular(a, b, operador) {
  let resultado

  switch (operador) {
    case "+":
      resultado = a + b
      break;
    case "-":
      resultado = a - b
      break;
    case "*":
      resultado = a * b
      break;
    case "/":
      resultado = a / b
      break;
    default:
      alert('Operador inválido')
      break;
  }

  return `O resultador da operação é ${resultado}`
}

const resultadoDoCalculo = calcular(valor1, valor2, operador)

alert(resultadoDoCalculo)

// calcular(15, 10, "+")
// calcular(15, 10, "-")
// calcular(2, 10, "*")
// calcular(50, 5, "/")