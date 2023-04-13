let numero1 = prompt("Informe um número aleatório:")
let numero2 = prompt("Informe outro número aleatório:")

function compararNumeros(num1, num2) {

  if(num1 > num2) {
    alert(`O primeiro número ${num1} é maior que o segundo número ${num2}.`)
  } else if(num1 < num2) {
    alert(`O primeiro número ${num1} é menor que o segundo número ${num2}`)
  } else{
    alert(`Os números ${num1} e ${num2} são iguais.`)
  }
}

compararNumeros(numero1, numero2)

