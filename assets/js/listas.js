
const listAnimales = ['Pez', 'Jaguar', 'Ardilla', 'Canguro', 'Cucaracha', 'Lobo', 'Iguana', 'Ajolote', 'Perro'];
const listComputers = ['HP','Dell','IBM','Asus','Toshiba','AlienWare','Apple','Samsung', 'Huawei', 'Lenovo'];
const listPeople = ['Santiago', 'Tamara', 'Cesar', 'Gabriela', 'Ana', 'Esteban', 'Diego', 'Alberto', 'Felipe', 'Claudia'];

const btnAnimals = document.querySelector('#animales');
const btnComputers = document.querySelector('#computers');
const btnPeople = document.querySelector('#people');


function displayList(Lists) {
    list.textContent = '';
    Lists.forEach (L => {
        const item = document.createElement('li');
        item.textContent = L;
        list.appendChild(item);
    });
}

btnAnimals.addEventListener('click', () =>{
    displayList(listAnimales);
})

btnComputers.addEventListener('click', () =>{
    displayList(listComputers);
})

btnPeople.addEventListener('click', () =>{
    displayList(listPeople);
})


/* btnAnimals.addEventListener('click', function (){
    listAnimales.forEach(animal => {
        const li = document.createElement('li');
        li.textContent= animal;
        list.appendChild(li);
    })
}) */