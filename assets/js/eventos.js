/* alert('hola'); */

//el evento se dispara cuando el documento esta cargado 

window.onload = function () {

}


let nameInput = document.querySelector('#nameInput');

nameInput.addEventListener('keydown', function (event) {
    console.log((nameInput.value));
});

let button = document.querySelector('#button');
button.addEventListener('click', event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
})