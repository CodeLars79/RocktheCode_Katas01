//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  const count = {}
  for (let i = 0; i < param.length; i++) {
    if (count[param[i]] >= 1) {
      count[param[i]]++
    } else {
      count[param[i]] = 1
    }
  }

  console.log(count)
}

repeatCounter(counterWords)
