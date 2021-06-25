/* document.getElementsByClassName('parrafo')[0].innerHTML = 'Hola soy un texto diferente'; */
/* Accedo al documento, busca todos los elementos que tengan el nombre de la clase, con textContent le dice que cambie el texto por el que acabamos de poner */

/* 
var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);


document.getElementsByClassName('parrafo')[0].innerHTML = 'Parrafo cambiado dinamicamente';

document.getElementById('parrafo2').innerHTML = 'soy el parrafo 2'

 */
/* getElementById para traer en especifico ese id, no se pueden repetir los id */

/*---------------------- OTRA MANERA DE ACCEDER A LOS ELEMENTOS DEL DOM -------------------*/

/* NOTA: un punto para hacer referencia a una clase y # para un ID  */

/* solo selecciona el primer elemento */
/* document.querySelector('.parrafo').textContent = 'Nuevo texto de parrafo'; */

/* para hacer referencia a un id *//* 
document.querySelector('#parrafo2').textContent = 'Nuevo texto de parrafo'; */

/* para afectar todos los parrafos */
document.querySelectorAll('.parrafo')[1].textContent = 'Nuevo texto de parrafo';

var parrafo1= document.querySelectorAll('.parrafo')[0];
var parrafo2= document.querySelector('#parrafo2');

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.parrafo1);
console.log(document.parrafo2);



