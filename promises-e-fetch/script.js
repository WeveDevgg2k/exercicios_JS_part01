function simularAPI(resultado, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado)
    }, tempo)
  })
}

simularAPI("Olá, mundo", 5000).then((resultado) => {
  console.log(resultado)
})