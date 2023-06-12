function removerDuplicatas(arr) {
  return Array.from(new Set(arr))
}

const arrayOriginal = [1, 2, 4, 5, 0, 45, 3, 32, 13, 4, 2, 6, 8, 5, 3, 3, 5, 4, 3, 5, 7, 5, 3]

const arraySemDuplicatas = removerDuplicatas(arrayOriginal)

console.log(arraySemDuplicatas)