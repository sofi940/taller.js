// Operadores de comparacion

console.log(10 === "10");  //Compara de forma mas segura
console.log(10 == "10");   // No compara convierte los datos


// Operador %

let numero = 7;
if (numero % 2 === 0){
    console.log("Es par");
}else{
    console.log("Es impar");
}

// Ciclo for

for (let i=1; i <= 5; i++){
console.log(i);
}

// Ciclo try catch

try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Ocurrió un problema:", error.message);
}

