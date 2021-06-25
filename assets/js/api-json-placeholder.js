let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#users');
/* 
btnUsers.addEventListener('click', () => {
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');

    getUsers
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        }).catch(e => console.log(e));
}) */
/* //otra manera de resolverlo */
/*
btnUsers.addEventListener('click', () => {
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');

    getUsers
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                let parr = document.createElement('p');
                parr.textContent = user.address.street;
                
                divUsers.appendChild(parr);
            });
        }).catch(e => console.log(e));
}) */



/* Tercera manera de hacerla */
/* 
async function displayData() { // async volvemos nuestra funcion asincrona
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users'); //await espera una respuesta y despues se ejecuta
    let data = await getUsers.json(); // recupera los datos 
    console.log(data);
}

displayData(); */

btnUsers.addEventListener('click', displayData());

async function displayData() { // async volvemos nuestra funcion asincrona
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users'); //await espera una respuesta y despues se ejecuta
    console.log(getUsers.ok);
    
    let data = await getUsers.json(); // recupera los datos 
    data.forEach(user => {
        let parr = document.createElement('p');
        parr.textContent = `Nombre de usuario: ${user.name}. Email: ${user.email}. Ciudad: ${user.address.city}`;
        
        divUsers.appendChild(parr);
    });
    
    console.log(data);
}

//displayData(); 