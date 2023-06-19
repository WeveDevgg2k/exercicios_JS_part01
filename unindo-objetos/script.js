const objeto1 = { a: 1, b: 2, c: 3 }
const objeto2 = { d: 4, e: 5, f: 6 }

function unirObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 }
}

const objetoUnido = unirObjetos(objeto1, objeto2)

console.log("Objeto Unido:")
console.log(objetoUnido)