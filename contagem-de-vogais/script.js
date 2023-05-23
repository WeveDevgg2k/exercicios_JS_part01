function contarVogais(str) {
  const vogais = "aeiouAEIOU"

  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      count++
    }
  }

  return count
}

const text = prompt('Escreva qualquer palavra:')

const contagemDeVogais = contarVogais(text)

console.log(`A quantidade de vogais na string é: ${contagemDeVogais}`)