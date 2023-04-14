let idadeDoUsuario = 22
let tipoDePasse = 'estudante'


function calcularTarifa(idade, tipoDePasse) {

  const tarifaNormal = 2.5

  if(idade <= 6) {
    return 0
  }

  let desconto = 0

  if(tipoDePasse === "estudante") {
    desconto = .5
  } else if(tipoDePasse === "idoso" && idade >= 60) {
    desconto = .3
  }

  return tarifaNormal * (1 - desconto)
}

const tarifa = calcularTarifa(idadeDoUsuario, tipoDePasse)

console.log(`A tarifa para uma pessoa com ${idadeDoUsuario} anos e passe do tipo "${tipoDePasse}" é R$${tarifa.toFixed(2)} `)