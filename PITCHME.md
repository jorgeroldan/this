### Programación Orientada a Objetos

---?image=assets/image/giphy3.gif&opacity=100

---

# THIS

### en el paradigma POO de JavaScript

---

![Mr.MeeSeeks](https://media1.giphy.com/media/IFbYDFVZFyUak/200w.webp)

## ¿Cuándo utilizamos THIS?

---

![Nico](https://pbs.twimg.com/profile_images/995340838795403264/VhF3DGJH_400x400.jpg)

  + var 💩
  + let y const 😎
  + Scope: Global y Local 🌎 📍

---

## Contexto !== Scope

---

## Que NO

![Mr.MeeSeeks](https://media2.giphy.com/media/XrT2XN8L6yoMg/200w.webp)

- Utilizar THIS en cualquier lugar sería llamar por llamar (Nosotros queremos llamar a la persona adecuada en el momento adecuado)

---
## Que SI

![Purpouse](https://media1.giphy.com/media/ziEGYtWrYAPcc/200w.webp)

- Utilizar THIS entendiendo el contexto del Objeto que queremos llamar y alcance específico en el que se encuentra.

---

![Constructor](https://media0.giphy.com/media/hBd8gzTnevKJq/giphy.gif)

---?image=assets/image/giphy7.gif&opacity=100

---
@title[JavaScript Block]

<p><span class="slide-title">Bloque de JavaScript</span></p>

```javascript
// Constructor
function constructorMiObjeto(nombre, apellido, edad, saludo) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludo = function(saludo) {
    console.log("cuando saludo digo: " + saludo)
  };
  this.ciudad = 'BSAS'

}

miObjeto = new constructorMiObjeto("Matias", "Blayer", 32, "Hola")


//Herencia

//Objeto Padre

function Persona(primerNombre, apellido) {
  this.primerNombre = primerNombre;
  this.apellido = apellido;
}

function Estudiante(primerNombre, apellido, cursoAcamica, rol, profesor) {
  Persona.call(this, primerNombre, apellido);
  this.cursoAcamica = cursoAcamica;
  this.profesor = profesor;
  this.rol = rol;

};

function Profesor(primerNombre, apellido, cursoAcamica, rol) {
  Persona.call(this, primerNombre, apellido);
  this.cursoAcamica = cursoAcamica;
  this.rol = rol
};

//Objetos Hijo

const nuevoProfesor = new Profesor("Matias", "Blayer", "FullStack", "Profesor");
const nuevoEstudiante = new Profesor("Carla", "Carlini", "FullStack", "Alumno", "Matias");

```

@[81](La llamada de la función podria ser una buena forma de entender el contexto)
@[9-17](Recomendación 2)
@[19-20](Recomendación 3)

---

## Bonus!

- Videos de POO
  + [Acamica](https://www.acamica.com/clases/8343/javascript-objetos)
  + [Khan Academy](https://es.khanacademy.org/computing/computer-programming/programming/object-oriented/p/challenge-double-rainbow)
- Lecturas recomendadas
  + [Free Code Camp](https://medium.freecodecamp.org/intro-to-object-oriented-programming-oop-with-javascript-made-easy-a317b87d6943)
  + [Understanding JS Scope](https://scotch.io/tutorials/understanding-scope-in-javascript)
- Documentación JavaScript Orientado a Objetos
  + [Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)


---

## Proyectos!

<div class="left">
    <i class="fa fa-user-secret fa-5x" aria-hidden="true"> </i><br>
    <a href="https://www.acamica.com/" class="pro-link">
    Aprender un poco más</a>
</div>
<div class="right">
    <ul>
        <li>Ta-Te-Ti</li>
        <li>Ahorcado</li>
        <li>Ciudad Zombie</li>
    </ul>
</div>

---

@fa[twitter gp-contact](@roldanjorgex)

@fa[github gp-contact](jorgeroldan)

