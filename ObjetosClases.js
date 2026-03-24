// Ejercicio 8.1 Metodos

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",

    mostrarInfo: function() {
        console.log("Título:", this.titulo);
        console.log("Autor:", this.autor);
    }
};

libro.mostrarInfo();

//Ejercicio 8.2 - Clases 

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return "Hola, soy " + this.nombre;
    }
}

let animal1 = new Animal("Firulais");
console.log(animal1.saludar());

//Ejercicio 8.3 - Herencia 

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return "Hola, soy " + this.nombre;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}

let perro1 = new Perro("Max", "Labrador");
console.log(perro1.saludar());

