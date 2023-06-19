const pessoa = {
  nome: "Max",
  idade: 7,
  profissao: "Guarda",
  hobbie: ["Correr", "Pular", "Rodar"]
}

function filtrarProps(obj, propsPermitidas) {
  const newObj = {}

  for (const prop of propsPermitidas) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }

  return newObj
}

const propriedadesPermitidas = ["nome", "profissao"]

const pessoaFiltrada = filtrarProps(pessoa, propriedadesPermitidas)

console.log(`Objeto pessoa filtrado com propriedades permitidas:`)
console.log(pessoaFiltrada)