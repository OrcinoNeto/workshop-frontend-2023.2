let cont = 0; // Inicializa com 1, pois o SWAPI começa com ID 1

let increment = document.getElementById("incrementar");
let decrement = document.getElementById("decrementar");

increment.addEventListener("click", function () {
    cont++;
    fetchData(cont);
});

decrement.addEventListener("click", function () {
    if (cont > 1) {
        cont--;
        fetchData(cont);
    }
});

function fetchData(id) {
    fetch('https://swapi.dev/api/people/' + id)
        .then(r => r.json())
        .then(corpo => {
            document.getElementById('nome').innerHTML = corpo.name
            document.getElementById('massa').innerHTML = corpo.mass
            document.getElementById('corCabelo').innerHTML = corpo.hair_color
            document.getElementById('etnia').innerHTML = corpo.skin_color
            document.getElementById('olhos').innerHTML = corpo.eye_color
            document.getElementById('anoNascimento').innerHTML = corpo.birth_year
            document.getElementById('sexo').innerHTML = corpo.gender
        });
} 