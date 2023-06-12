function mediaArrays(arr) {
  const soma = arr.reduce((accum, valor) => accum + valor, 0)

  return soma / arr.length
}

const numeros = [1, 2, 3, 5, 6, 7, 4, 5, 6, 9]

const media = mediaArrays(numeros)

console.log(media)