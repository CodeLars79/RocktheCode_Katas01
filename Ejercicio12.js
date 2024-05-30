//función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  for (let a = 0; a < param.length; a++) {
    const element1 = param[a]

    for (let b = a + 1; b < param.length; b++) {
      const element2 = param[b]

      // hemos encontrado un duplicado (pasta)
      if (element1 === element2) {
        // eliminación de elemento
        param.splice(b, 1)

        // volver a comprobar
        b--
      }
    }
  }
  console.log(param)
}
removeDuplicates(duplicates)
