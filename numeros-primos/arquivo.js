const N = prompt('Insira um número aleatório:')

function isPrime(num) {
  if (num < 1) {
    return false
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

for (let i = 2; i <= N; i++) {
  if (isPrime(i)) {
    console.log(i)
  }
}