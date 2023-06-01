function gerarArray(tamanho, maxValor) {
  const arr = []

  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * (maxValor + 1)))
  }

  return arr
}

const tamanho = 10
const maxValor = 1000

const resultadoArr = gerarArray(tamanho, maxValor)

console.log(resultadoArr)