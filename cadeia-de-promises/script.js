function carregarDados(newUrl) {
  return fetch(newUrl).then((response) => response.json())
}

async function executarChain(urls) {
  const dadosArray = []
  for (const url of urls) {
    const dados = await carregarDados(url)
    dadosArray.push(dados)
  }

  return dadosArray
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5"
]

executarChain(urls).then((dadosArray) => {
  console.log(dadosArray)
})