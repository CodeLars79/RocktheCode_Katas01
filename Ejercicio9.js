//función sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

function sumAll(numbers) {
  // Variable para almacenar la suma
  let sum = 0

  // A recorrer todos los números en array
  for (let i = 0; i < numbers.length; i++) {
    // Agregar el número actual a la suma
    sum += numbers[i]
  }

  // Devolver la suma total
  return sum
}
// Ejercicio:
const array = [1, 2, 3, 5, 45, 37, 58]
const result = sumAll(array)
console.log(result)
