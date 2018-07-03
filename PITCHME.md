### Programación Orientada a Objetos

---?image=assets/image/giphy3.gif&opacity=100

---

# THIS

### en el paradigma POO de JavaScript

---

![Mr.MeeSeeks](https://media1.giphy.com/media/IFbYDFVZFyUak/200w.webp)

## ¿Cuándo utilizamos THIS?

---

![Nico](https://images.duckduckgo.com/iu/?u=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F948922%3Fs%3D460%26v%3D4&f=1)

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
// Definir el prototipo
function Perro (raza, nombre) {
  this.raza = raza;
  this.nombre = nombre;
}
 
// Acá creamos al perro snoopy 
var snoopy = new Perro("Beagle","Snoopy");

// Y le enseñamos a ladrar
snoopy.ladrar = function() {
  console.log("Woof");
};

 
// Ahora creamos al perro Pichichus 
var pichichus = new Perro("Callejero", "Pichichus");

```

@[1,2](Recomendación 1)
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

