const modal = document.querySelector('.modal')
const textDiv = document.querySelector('.text')
const showModalBtn = document.querySelector('#showModal')
const closeModalBtn = document.querySelector('#closeModal')

showModalBtn.addEventListener('click', () => {
  modal.classList.remove('hide')
  // textDiv.classList.add('hide')
})
closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hide')
  textDiv.classList.remove('hide')
})

// const showModal = document.querySelector('#showModal').addEventListener('click', () => {
//   const modal = document.querySelector('.modal').classList.remove('hide')
//   const textDiv = document.querySelector('.text').classList.add('hide')
// })

// const closeModal = document.querySelector('#closeModal').addEventListener('click', () => {
//   const modal = document.querySelector('.modal').classList.add('hide')
//   const textDiv = document.querySelector('.text').classList.remove('hide')
// })