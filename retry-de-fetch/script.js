function tryAgain(func, maxAttempts, interval) {
  return new Promise(async (resolve, reject) => {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const result = await func()
        return resolve(result)
      } catch (err) {
        if (attempt === maxAttempts) return reject(err)
        await new Promise((request) => setTimeout(request, interval))
      }
    }
  })
}

const fetchComRetry = () => fetch("https://auimaueauimae.com.br")

tryAgain(fetchComRetry, 3, 1000)
  .then((response) => response.json())
  .then((dados) => console.log(dados))
  .catch((err) => console.error("Falha após três tentativas."))