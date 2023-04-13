let idade = prompt("Informe a sua idade:")

if(idade <= 12) {
  alert(`Você é uma criança!
  Idade: ${idade} anos.`)
} else if(idade <= 17) {
  alert(`Você é um(a) adolescente.
  Idade: ${idade} anos.`)
} else if(idade <= 59) {
  alert(`Você é um(a) adulto.
  Idade: ${idade} anos.`)
} else {
  alert(`Você é um(a) idoso(a).
  Idade: ${idade} anos.`)
}