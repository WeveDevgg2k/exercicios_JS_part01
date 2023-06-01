function elementoRepetido(arr) {
  const contador = []

  let elemento = arr[0]
  let maxContagem = 1

  for (const valor of arr) {
    if (!contador[valor]) {
      contador[valor] = 1
    } else {
      contador[valor]++
    }

    if (contador[valor] > maxContagem) {
      maxContagem = contador[valor]
      elemento = valor
    }
  }

  return elemento
}

const numeros = [1, 4, 5, 2, 1, 5, 4, 4, 4, 4]

const numerosRepetidos = elementoRepetido(numeros)

console.log(numerosRepetidos)