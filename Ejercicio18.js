//Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

//se usa bucle for para recorrer todos los destinos del array
for (let i = 0; i < placesToTravel.length; i++) {
  //se eliminan los elementos que tengan el id 11 y 40
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    //se usa el método splice para eliminar el dato elegido
    placesToTravel.splice(i, 1)
  }
}
console.log(placesToTravel)
