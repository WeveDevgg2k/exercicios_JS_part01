const li = document.querySelectorAll('.item')

li.forEach((li) => {
  li.addEventListener('click', () => {
    li.remove()
  })
})

