const numObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

function somarValoresObj(obj) {

  let soma = 0

  for (const chave in obj) {
    if (obj.hasOwnProperty(chave) && typeof obj[chave] === "number") {
      soma += obj[chave]
    }
  }

  return soma
}

console.log(`A soma dos valores dos obhetos é ${somarValoresObj(numObj)}`)