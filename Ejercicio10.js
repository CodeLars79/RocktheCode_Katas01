const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  // Inicializo una variable para almacenar la suma
  let sum = 0

  // los números en el array y la sumo cada uno a sum
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    sum += param[i]
  }

  // promedio dividiendo la suma entre la cantidad de elementos
  const avg = sum / param.length

  // promedio
  return avg
}

const result = average(numbers)
console.log(result)
