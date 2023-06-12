function intersecaoArrays(arr1, arr2) {
  return arr1.filter((elemento) => arr2.includes(elemento))
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]

const arrayIntersecao = intersecaoArrays(array1, array2)

console.log(arrayIntersecao)