//  Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es par");
  } else {
    console.log(numero + " es impar");
  }
}

// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
  } else if (numero1 < numero2) {
    console.log(numero2 + " es mayor que " + numero1);
  } else {
    console.log("Ambos números son iguales");
  }
}

//  Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5");
  } else {
    console.log(numero + " no es múltiplo de 5");
  }
}

// Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabraRepetidamente(palabra, veces) {
  for (let i = 0; i < veces; i++) {
    console.log(palabra);
  }
}

// Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimirArraySinQuintoElemento(array) {
  if (array.length !== 10) {
    console.log("El array debe contener exactamente 10 elementos.");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarArray(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}
