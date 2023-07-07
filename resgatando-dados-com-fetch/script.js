function getFetchData(url) {
  return fetch(url).then((res) => res.json())
}

getFetchData('https://jsonplaceholder.typicode.com/todos/1').then((dados) => {
  console.log(dados)
})