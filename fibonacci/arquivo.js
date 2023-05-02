const numero = 5

function fibonacci(num) {
  let num1 = 0
  let num2 = 1

  let sequencia = []

  while (num1 <= num) {
    sequencia.push(num1)
    const temp = num1
    num1 = num
    num2 = temp + num1
  }

  return sequencia
}

const sequenciaFibonacci = fibonacci(numero)

console.log(`A sequência de Fibonacci até ${numero} é:`, sequenciaFibonacci)