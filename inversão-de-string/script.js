let text = prompt('Escreva uma palavra:')

function inverterString(txt) {
  return txt.split('').reverse().join('')
}

console.log(inverterString(text))