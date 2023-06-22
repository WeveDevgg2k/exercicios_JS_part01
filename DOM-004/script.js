const btn = document.getElementById('btn').addEventListener('click', () => {
  const list = document.querySelector('.list')
  const li = document.createElement('li')
  li.textContent = 'Item'

  list.appendChild(li)
})