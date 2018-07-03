let Animal = function (nombre) {
    this.nombre = nombre;
};

let Perro = function (nombre) {

    Animal.call(this, nombre);
    this.ladrar = function () {
        console.log("¡Guau Guau!");
    }
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;



let Gato = function (nombre) {

    Animal.call(this, nombre);
    this.maullar = function () {
        console.log("¡Miau Miau!");
    }
}
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;
