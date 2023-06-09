function mapearArray(valores, transformacao) {
  const resultado = []

  for (const valor of valores) {
    resultado.push(transformacao(valor))
  }

  return resultado
}

const numeros = [1, 2, 3, 4, 5]
const quadrados = mapearArray(numeros, (numero) => numero * numero)

console.log(quadrados)