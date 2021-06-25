/* 21 de junio */
/* se hace referencia al elemento dentro del HTML */
/* para seleccionar una clase se usa . */
/* para seleccionar un id se usa # */

let subtitle = document.querySelector('#subtitle'); // # hace referencia a que es un id
let parrafo = document.querySelector('#parrafo'); // # hace referencia a que es un id
console.log(subtitle);

/* con textContent podemos acceder al valor del elemento HTML */
/* podemos cambiar el valor asignando un nuevo valor */
console.log(subtitle.textContent);

subtitle.textContent = 'Nuevo valor';  //para darle un nuevo valor 

/* classList.add('red') para agregar clases al elemento */
subtitle.classList.add('red'); //para agregar una nueva class
subtitle.classList.remove('red'); //para agregar una nueva class

const animales = ['perro', 'gato', 'pato', 'Pez', 'Leopardo', 'Raton', 'Zorro'];

animales.push('Elefante');


const list = document.querySelector('#list');

 animales.forEach(function(animal, index) {
    let item = document.createElement('li');
    /* item.textContent = animal; */
    item.textContent = `${index +1} ${animal}`;
    list.appendChild(item); //appendChild para que agregue 
}); 


/* funcion de flecha */
/* 
animales.forEach(animal => {
    let item = document.createElement('li');
    item.textContent = animal;
    list.appendChild(item); //appendChild para que agregue 
}); */