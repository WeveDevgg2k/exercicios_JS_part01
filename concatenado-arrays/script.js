function concatArrays(arr1, arr2) {
  return arr1.concat(arr2)
}

const array = [1, 2, 3]
const array2 = [4, 5, 6]

const arrConcatenado = concatArrays(array, array2)
console.log(arrConcatenado)