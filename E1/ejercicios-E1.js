//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parImpar = (numero) => {
  if (numero % 2 == 0) {
    console.log("el numero es par");
  } else {
    console.log("El numero es impar");
  }
};
//parImpar(5)

//#####################################################################################
//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayorYMenor = (num1, num2) => {
  if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    console.log(`El numero ${num2} es mayor que ${num1}`);
  } else {
    console.log(`Los numeros son iguales`);
  }
};

//mayorYMenor(57,32)
//mayorYMenor(10,45)
//mayorYMenor(5,5)

//#####################################################################################
//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploDe5 = (numero) => {
  if (numero % 5 == 0) {
    console.log(`El numero ${numero} es multiplo de 5`);
  } else {
    console.log(`El numero ${numero} no es multiplo de 5`);
  }
};

//multiploDe5(54)

//#####################################################################################
//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const imprimirNumeros = (numero) => {
  for (i = 0; i <= numero; i++) {
    console.log(i);
  }
};

//imprimirNumeros(10)

//#####################################################################################
//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const imprimirPalabra = (palabra, numero) => {
  for (i = 0; i < numero; i++) {
    console.log(palabra);
  }
};

///imprimirPalabra("Hola",5)

//#####################################################################################
//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const imprimirArray = (array) => {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

//imprimirArray ([10,20,30,40,"Hola"]);

//#####################################################################################
//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const imprimirMenosEl5 = (array) => {
  for (i = 0; i < array.length; i++) {
    if (i != 4) {
      console.log(array[i]);
    }
  }
};

//imprimirMenosEl5([1,2,3,4,5,6,7,8,9,10])

//#####################################################################################
//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const multiplicarArray = (array, numero) => {
  for (i = 0; i < array.length; i++) {
    console.log(array[i] * 2);
  }
};

multiplicarArray([1, 2, 3, 4, 5], 2);
