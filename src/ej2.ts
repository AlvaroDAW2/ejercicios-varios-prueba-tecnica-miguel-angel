// Ej2. Recorrer dos array contando cuantas veces un elemento del primero es mayor que la del segundo.

export function contadorElementosMayor (array1: number[], array2: number[]): number {
  return array1.reduce((accumulated, currentValue, index) =>
    accumulated + (currentValue > array2[index] ? 1 : 0)
  , 0)
}

const array1 = [1, 6, 8, 10, 20, 40, 24, 67, 97]
const array2 = [2, 6, 19, 56, 43, 60, 100, 90, 65]
console.log(contadorElementosMayor(array1, array2))
