

    

let button = document.querySelector('#button');

button.addEventListener('click', () => {
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search'); // fetch hace la peticion por GET
    apiFetch
    .then(resp => resp.json()) //recupera los datos en formato json
    .then(data => {
        let cat = document.querySelector('#cat');
        cat.src = data[0].url;
        console.log(data);
    }).catch(e => console.log(e))
})