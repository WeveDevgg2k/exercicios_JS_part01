function fatorial(num) {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return num * fatorial(num - 1)
  }
}

let numero = prompt("Digite qualquer número")

console.log(`O fatorial do número ${numero} é ${fatorial(numero)}`)