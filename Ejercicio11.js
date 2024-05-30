//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  // Inicializo una variable para almacenar la suma
  let sum = 0

  for (let i = 0; i < param.length; i++) {
    const element = param[i]

    // buscando la promedia entre los tipos de elementos
    if (typeof element === 'string') {
      sum += element.length
    } else {
      sum += element
    }
  }
  // promedio
  return sum / param.length
}

const result = averageWord(mixedElements)
console.log(result)
