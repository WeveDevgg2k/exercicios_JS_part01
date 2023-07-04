function execucaoCondicional(verificar, executar, naoExecutar) {
  if (verificar()) {
    executar()
  } else {
    naoExecutar()
  }
}

execucaoCondicional(() => 5 > 30, () => console.log('5 é maior que 3'), () => console.log('Condição inválida'))