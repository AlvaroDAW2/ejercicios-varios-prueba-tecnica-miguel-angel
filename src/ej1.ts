// Ej1. Recorrer un array y contar cual es la diferencia entre un valor dado y cada uno de los del array.
export function diferenciaArray (array: number[], num: number): number[] {
  const differenceArray: number[] = []
  array.forEach(n => {
    const difference = num - n
    differenceArray.push(difference)
  })

  return differenceArray
}

const array = [1, 67, 53, 2, 6, 10, 98]
console.log(diferenciaArray(array, 4))
