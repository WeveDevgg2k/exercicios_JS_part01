const name = prompt('Qual é o seu nome?')
const age = prompt('Qual é a sua idade?')
const city = prompt('Digite a cidade onde mora atualmente:')

function criarMensagem(name, age, city) {
  return `Dados do cliente:
  Nome: ${name}
  Idade: ${age}
  Cidade: ${city}`
}

const message = criarMensagem(name, age, city)

// const message = `Dados do cliente:
// Nome: ${name}.
// Idade: ${age}
// Cidade: ${city}`

alert(message)

