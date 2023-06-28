function temporizador(seconds, action) {
  setTimeout(action, seconds * 1000)
}

temporizador(5, () => {
  console.log('Se passaram 5 segundos')
})