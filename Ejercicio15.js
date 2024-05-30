//Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

//bucle que muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta"
for (const item of products) {
  if (item.includes('Camiseta')) {
    console.log(item)
  }
}
