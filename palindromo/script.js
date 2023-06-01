function palindromo(str) {
  const strInvertida = str.split("").reverse().join("")

  return str.toLowerCase() === strInvertida.toLowerCase()
}

const textoParaTeste = "osso"
const resultado = palindromo(textoParaTeste)

console.log(`A string ${textoParaTeste} é uma palídromo? ${resultado ? "sim" : "não"}`)