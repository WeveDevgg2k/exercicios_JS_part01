function moverItem(direcao) {
  const lista = document.querySelector('#lista')
  const itens = Array.from(lista.querySelectorAll("li"))
  const itemSelecionado = lista.querySelector('.selecionado')

  if (!itemSelecionado) {
    alert('Selecione um Item')
    return
  }

  const index = itens.indexOf(itemSelecionado)

  if (direcao === "cima" && index > 0) {
    lista.insertBefore(itemSelecionado, itens[index - 1])
  } else if (direcao === "baixo" && index < itens.length - 1) {
    lista.insertBefore(itemSelecionado.nextElementSibling, itens[index])
  }
}

function selecionarItem(ev) {
  const itens = document.querySelectorAll('#lista li')

  itens.forEach(item => item.classList.remove('selecionado'))

  ev.target.classList.add('selecionado')
}

const itensDaLista = document.querySelectorAll('#lista li')

itensDaLista.forEach((item) => item.addEventListener('click', selecionarItem))

const btnUp = document.querySelector('#moveup').addEventListener('click', () => moverItem("cima"))
const btnDown = document.querySelector('#movedown').addEventListener('click', () => moverItem("baixo"))