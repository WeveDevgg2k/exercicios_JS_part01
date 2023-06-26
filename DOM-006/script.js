function filtrarLista() {
  const filtro = document.querySelector('#filtro').value.toUpperCase()

  const lista = document.querySelector('#lista')
  const itens = lista.getElementsByTagName('li')

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i]

    const texto = item.textContent || item.innerText

    item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none"
  }
}

const inputFiltro = document.querySelector('#filtro')

inputFiltro.addEventListener('keyup', filtrarLista)