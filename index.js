//! EJERCICIO 1:

//* 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
//* 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
//* 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
//* 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

// let myFavoriteHero = 'hulk'
// console.log(myFavoriteHero)
// let x = 50
// let h = 5
// let y = 10
// let z = h + y

//! EJERCICIO 2:

//* 1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
// const character = { name: 'Jack Sparrow', age: 10 }
// console.log(character)
// character.age = 25
// console.log(character)

// 1.2 Declara 3 variables con los nombres y valores siguientes
// firstName = 'Jon'
// lastName = 'Snow'
// age = 24
//Muestralos por consola de esta forma:
;('Soy Jon Snow, tengo 24 años y me gustan los lobos.')
// console.log(`soy ${firstName} ${lastName}, tengo ${age} años`)

//1.3 Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.
// const toy1 = { name: 'Buss myYear', price: 19 }
// const toy2 = { name: 'Rallo mcKing', price: 29 }
// const sum = toy1.price + toy2.price
// console.log(sum)

//1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
//* let globalBasePrice = 10000;
// const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
// const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }

// let globalBasePrice = 25000
// car1.finalPrice = car1.basePrice + globalBasePrice
// car2.finalPrice = car2.basePrice + globalBasePrice
// console.log(car1.finalPrice)
// console.log(car2.finalPrice)

//! EJERCICIO 3:

//* 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
// let multiply = 10 * 5
// console.log(multiply)

//* 1.2 Divide 10 por 2 y muestra el resultado en un console.
// let division = 10 / 2
// console.log(division)

//* 1.3 Muestra mediante un console el resto de dividir 15 por 9.
// let rest = 15 % 9
// console.log(rest)

//* 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
// let p = 10
// let j = 5
// let o = p + j
// console.log(o)

//* 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
// let c = 10
// let m = 5
// let i = c * m
// console.log(i)

//! EJERCICIO 4:

//* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
// console.log(avengers[0])

//* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
// avengers[0] = 'IRONMAN'
// console.log(avengers)

//* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
// console.log(avengers.length)

//* 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
// console.log(rickAndMortyCharacters)
// rickAndMortyCharacters.push('Morty', 'Summer')
// console.log(rickAndMortyCharacters)
// console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = [
//   'Rick',
//   'Beth',
//   'Jerry',
//   'Morty',
//   'Summer',
//   'Lapiz Lopez',
// ]
// console.log(rickAndMortyCharacters)
// rickAndMortyCharacters.pop()
// console.log(rickAndMortyCharacters)
// console.log(rickAndMortyCharacters[0])
// console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//* 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = [
//   'Rick',
//   'Beth',
//   'Jerry',
//   'Morty',
//   'Summer',
//   'Lapiz Lopez',
// ]
// rickAndMortyCharacters.splice(1, 1)
// console.log(rickAndMortyCharacters)

//! EJERCICIO 5:

// const number1 = 10;
// const number2 = 20;
// const number3 = 2;

// if(number1 === 10){
//     console.log('number1 es estrictamente igual a 10')
// }

// if (number2 / number1 == 2) {
//   console.log("number2 dividido entre number1 es igual a 2");
// }

// if (number1 !== number2) {
//   console.log("number1 es estrictamente distinto a number2");
// }

// if (number3 != number1) {
//   console.log("number3 es distinto number1");
// }

// if (number3 * 5 == number1) {
//   console.log("number3 por 5 es igual a number1");
// }

// if (number3 * 5 == number1 && number1 * 2 == number2) {
//   console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
// }

// if (number2 / 2 == number1 || number1 / 5 == number3) {
//   console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
// }

//! EJERCICIO 6:

//* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
//* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
// for (let i = 0; i < 9; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }
//* 1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.

// for (let i = 0; i < 10; i++) {
//   console.log('Intentando dormir 🐑')
//   if (i === 9) {
//     console.log('Dormido!')
//   }
// }

//! EJERCICIO 7:

// function sum(numberOne, numberTwo) {
//   if (numberOne > numberTwo) {
//     return numberOne
//   }
//   else {
//     return numberTwo
//   }
// }
// console.log(sum(6, 8))
//TODO-------------------------------------------------------//
// function sum(numberOne, numberTwo) {
//   return Math.max(numberOne, numberTwo)
// }
// console.log(sum(4, 2))

//! EJERCICIO 8:
//* Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.Puedes usar este array para probar tu función:

// const avengers = [
//   'Hulk',
//   'Thor',
//   'IronMan',
//   'Captain A.',
//   'Spiderman',
//   'Captain M.',
// ]
// function findLongestWord(param) {
//   let longestWord = ''
//   for (let i = 0; i < param.length; i++) {
//     if (param[i].length > longestWord.length) {
//       longestWord = param[i]
//     }
//   }
//   return longestWord
// }
// console.log(findLongestWord(avengers))

//! EJERCICIO 9:
//* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

// const numbers = [1, 2, 3, 5, 45, 37, 58]

// function sumAll(param) {
//   totalSum = 0
//   for (let i = 0; i < param.length; i++) {
//     totalSum += param[i]
//   }
//   return totalSum
// }
// console.log(sumAll(numbers))

//! EJERCICIO 10:

//* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

// const numbers = [12, 21, 38, 5, 45, 37, 6]
// function average(param) {
//   let sum = 0
//   for (let number of param) {
//     sum += number
//   }
//   return sum / param.length
// }
// console.log(average(numbers))

//! EJERCICIO 11:

//* Calcular promedio de cadenas: Crea una función que recibe por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:pista (tipo de)

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
// function averageWord(param) {
//   let totalSum = 0

//   for (let element of param) {
//     if (typeof element === 'number') {
//       totalSum += element
//     } else if (typeof element === 'string') {
//       totalSum += element.length
//     }
//   }
//   return totalSum / param.length
// }
// console.log(averageWord(mixedElements))

//! EJERCICIO 12:
//* Valores únicos: Crea una función que recibe por parámetro un array y comprueba si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: pista (cuando eliminamos algo de un array, su longitud se verá afectada)

// const duplicates = [
//   'sushi',
//   'pizza',
//   'burger',
//   'potatoe',
//   'pasta',
//   'ice-cream',
//   'pizza',
//   'chicken',
//   'onion rings',
//   'pasta',
//   'soda',
// ]
// function removeDuplicates(param) {
//   for (let i = 0; i < param.length; i++) {
//     const primerPuntero = param[i]

//     for (let j = i + 1; j < param.length; j++) {
//       const segundoPuntero = param[j]

//       if (primerPuntero === segundoPuntero) {
//         param.splice(j, 1)
//         j--
//       }
//     }
//   }
//   console.log(param)
// }
// console.log(removeDuplicates(duplicates))

//! EJERCICIO 13:
//* Buscador de nombres: Crea una función que recibe por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un falso. Puedes usar este array para probar tu función:

// const nameFinder = [
//   'Peter',
//   'Steve',
//   'Tony',
//   'Natasha',
//   'Clint',
//   'Logan',
//   'Xabier',
//   'Bruce',
//   'Peggy',
//   'Jessica',
//   'Marc',
// ]

// function finderName(array, element) {
//   if (array.includes(element)) {
//     return `${true}, posicion: ${array.indexOf(element)}`
//   } else {
//     return false
//   }
// }

// console.log(finderName(nameFinder, 'Peggy'))

//------------------------------------------------------------------//

// function finderName(array, element) {
//   for (let i = 0; i < array.length; i++) {
//       console.log(element);
//       console.log(array[i]);
//       if (element === array[i]) {
//           return `${true}, posicion: ${i}`
//       }
//   }
//   return false;
// }

// console.log(finderName(nameFinder, "Steve"))

//! EJERCICIO 14:

//* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

// const counterWords = [
//   'code',
//   'repeat',
//   'eat',
//   'sleep',
//   'code',
//   'enjoy',
//   'sleep',
//   'code',
//   'enjoy',
//   'upgrade',
//   'code',
// ]
// function repeatCounter(array) {
//   const count = {}
//   for (let i = 0; i < array.length; i++) {
//     if (count[array[i]] >= 1) {
//       count[array[i]]++
//     } else {
//       count[array[i]] = 1
//     }
//   }
//   console.log(count)
// }
// repeatCounter(counterWords)

//! EJERCICIO 15:

//* Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

// const products = [
//   'Camiseta de Pokemon',
//   'Pantalón coquinero',
//   'Gorra de gansta',
//   'Camiseta de Basket',
//   'Cinrurón de Orión',
//   'AC/DC Camiseta',
// ]

// for (let i = 0; i < products.length; i++) {
//   if (products[i].includes('Camiseta')) {
//     console.log(products[i])
//   }
// }

//! EJERCICIO 16:

//* Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores. Puedes usar este array:

// const placesToTravel = [
//   'Japon',
//   'Venecia',
//   'Murcia',
//   'Santander',
//   'Filipinas',
//   'Madagascar',
// ]
// for (const places of placesToTravel) {
//   console.log(places)
// }

//! EJERCICIO 17:

//* Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

// const alien = {
//   name: 'Wormuck',
//   race: 'Cucusumusu',
//   planet: 'Eden',
//   weight: '259kg',
// }
// for (const key in alien) {
//   console.log(alien[key])
// }

//! EJERCICIO 18:

//* Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

// const placesToTravel = [
//   { id: 5, name: 'Japan' },
//   { id: 11, name: 'Venecia' },
//   { id: 23, name: 'Murcia' },
//   { id: 40, name: 'Santander' },
//   { id: 44, name: 'Filipinas' },
//   { id: 59, name: 'Madagascar' },
// ]

// for (let i = 0; i < placesToTravel.length; i++) {
//   if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
//     placesToTravel.splice(i, 1)
//   }
// }
// console.log(placesToTravel)

//! EJERCICIO 19:

//* Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

// const toys = [
//   { id: 5, name: 'Buzz MyYear' },
//   { id: 11, name: 'Action Woman' },
//   { id: 23, name: 'Barbie Man' },
//   { id: 40, name: 'El gato con Guantes' },
//   { id: 40, name: 'El gato felix' },
// ]

// for (let i = 0; i < toys.length; i++) {
//   if (toys[i].name.includes('gato')) {
//     toys.splice(i, 1), i--
//   }
// }
// console.log(toys)

//! EJERCICIO 20:

//* For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

// const popularToys = []
// const toys = [
//   { id: 5, name: 'Buzz MyYear', sellCount: 10 },
//   { id: 11, name: 'Action Woman', sellCount: 24 },
//   { id: 23, name: 'Barbie Man', sellCount: 15 },
//   { id: 40, name: 'El gato con Guantes', sellCount: 8 },
//   { id: 40, name: 'El gato felix', sellCount: 35 },
// ]
// for (let toy of toys) {
//   if (toy.sellCount > 15) {
//     popularToys.push(toy)
//   }
// }
// console.log(popularToys)

//! EJERCICIO 21:

//*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

// const users = [
//   { name: 'Tony', years: 43 },
//   { name: 'Peter', years: 18 },
//   { name: 'Natasha', years: 14 },
//   { name: 'Bruce', years: 32 },
//   { name: 'Khamala', years: 16 },
// ]

// const mayores = []
// const menores = []
// for (user of users) {
//   if (user.years < 18) {
//     menores.push(user)
//   }
//   if (user.years >= 18) {
//     mayores.push(user)
//   }
// }
// console.log('usuarios menores', menores)
// console.log('usuarios mayores', mayores)

//! EJERCICIO 22:

//* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

// const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
// const foodSchedule = [
//   { name: 'Heura', isVegan: true },
//   { name: 'Salmon', isVegan: false },
//   { name: 'Tofu', isVegan: true },
//   { name: 'Burger', isVegan: false },
//   { name: 'Rice', isVegan: true },
//   { name: 'Pasta', isVegan: true },
// ]

// for (let i = 0; i < foodSchedule.length; i++) {
//   if (foodSchedule[i].isVegan === false) {
//     foodSchedule[i].name = fruits.shift()
//     foodSchedule[i].isVegan = true
//   }
// }
// console.log(foodSchedule)

//! EJERCICIO 23:

//* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

// const movies = [
//   { name: 'Titan A.E.', durationInMinutes: 130 },
//   { name: 'Nightmare before Christmas', durationInMinutes: 225 },
//   { name: 'Inception', durationInMinutes: 165 },
//   { name: 'The Lord of the Rings', durationInMinutes: 967 },
//   { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
//   { name: 'Terminator', durationInMinutes: 140 },
//   { name: 'Cortometraje', durationInMinutes: 60 },
// ]

// let shortFilm = []
// let mediumFilm = []
// let largeFilm = []

// for (let i = 0; i < movies.length; i++) {
//   if (movies[i].durationInMinutes < 100) {
//     shortFilm.push(movies[i])
//   } else if (movies[i].durationInMinutes > 200) {
//     largeFilm.push(movies[i])
//   } else {
//     mediumFilm.push(movies[i])
//   }
// }
// console.log(shortFilm)
// console.log(mediumFilm)
// console.log(largeFilm)

//! EJERCICIO 24:

//* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

// const products = [
//   { name: 'Funko Dr. Strange', sellCount: 10 },
//   { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
//   { name: 'Sable laser FX', sellCount: 23 },
//   { name: 'Varita de Voldemort', sellCount: 6 },
// ]
// let totalSell = 0
// for (let i = 0; i < products.length; i++) {
//   totalSell += products[i].sellCount
// }
// console.log(totalSell)

//! EJERCICIO 25:
//* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

// const products = [
//   { name: 'Funko Dr. Strange', sellCount: 10 },
//   { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
//   { name: 'Sable laser FX', sellCount: 23 },
//   { name: 'Varita de Voldemort', sellCount: 6 },
// ]
// let totalSell = 0
// for (let i = 0; i < products.length; i++) {
//   totalSell += products[i].sellCount
// }
// console.log(totalSell / products.length)

//! EJERCICIO 26:
//* Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 },
]

for (let i = 0; i < products.length; i++) {
  if (products[i].sellCount > 20) {
    goodProducts.push(products[i])
  } else {
    badProducts.push(products[i])
  }
}
console.log(goodProducts)
console.log(badProducts)
