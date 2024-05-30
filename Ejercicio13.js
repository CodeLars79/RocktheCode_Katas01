//función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(array, element) {
  // Si se encuentra el valor, devolver true y la posición
  if (array.includes(element)) {
    return `${true}, posicion: ${array.indexOf(element)}`
  }
  // Si no se encuentra el valor, devolver false
  else {
    return false
  }
}
// salida namefinder
console.log(finderName(nameFinder, 'Logan'))
console.log(finderName(nameFinder, 'Peggy'))
console.log(finderName(nameFinder, 'Johnny'))
