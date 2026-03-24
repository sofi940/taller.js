// Conversion implicita

let numero1 = 10;
let numero2 = "5"


console.log(numero1+numero2); // toma el numero2 como texto y lo concatena con el numero1 conviertiendolo tambien en string
console.log(numero1*numero2);// toma el numero2 y lo convierte en number

// Conversion explicita

// De number a string

let texto = String(25);
console.log(texto);
console.log(typeof texto);

// De String a number

let numero = Number(100);
console.log(numero);
console.log(typeof numero);

// Convertir a boolean

console.log(Boolean(""));
console.log(Boolean("hola"));