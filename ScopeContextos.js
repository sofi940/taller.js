// Ejercicio 6.1

let global = "Soy global";

function ejemplo() {
    let local = "Soy local";

    console.log(global); // funciona
    console.log(local);  // funciona
}

ejemplo();

console.log(global); //  funciona
console.log(local);  //  error

//Ejercicio 6.2

let coche = {
    marca: "Toyota",

    mostrarMarca: function() {
        console.log(this.marca);
    }
};

coche.mostrarMarca();   // this representa - este objeto