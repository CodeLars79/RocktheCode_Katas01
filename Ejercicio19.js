const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

//bucle for para recorrer todos los juguetes
for (let i = 0; i < toys.length; i++) {
  //se usa la funcion includes para buscar juguetes con la palabra "gato"
  if (toys[i].includes('gato')) {
    //se eliminan los que incluyan la palabra gato
    toys.splice(i, 1)
  }
}

console.log(toys)
