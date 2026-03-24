// Ejercicio 7.1 - Mutables

let frutas = ["Manzana", "Banana"];

console.log("Inicial:", frutas);

frutas.push("Naranja");
console.log("Después de push:", frutas);

frutas.pop();
console.log("Después de pop:", frutas);

// Ejercicio 7.2 - Inmutables

let numeros = [1, 2, 3];

let multiplicados = numeros.map(n => n * 2);
console.log("Multiplicados:", multiplicados);

let mayores = numeros.filter(n => n > 1);
console.log("Mayores a 1:", mayores);

//Ejercicio 7.3 - Iteracion

let frutas2 = ["Manzana", "Banana", "Naranja"];

frutas2.forEach(fruta => {
    console.log(fruta);
});

let encontrada = frutas2.find(fruta => fruta === "Banana");
console.log("Encontrada:", encontrada);

let indice = frutas2.findIndex(fruta => fruta === "Manzana");
console.log("Índice:", indice);