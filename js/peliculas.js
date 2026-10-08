
let Pagina = 1; //puede cambiar el valor

// aca llamaremos a todos mis FILAS tr que estan en mi tbody con el id tablas-peliculas
const filas = document.querySelectorAll('#tabla-peliculas tr');
const filasPorPagina = 4;

// los botones
const botonSiguiente = document.querySelector('.boton-siguiente');
const botonAnterior = document.querySelector('.boton-anterior');


function mostrarPeliculas(){
    let inicio = (Pagina - 1) * filasPorPagina;
    let fin = inicio + filasPorPagina;

    filas.forEach((fila, indice) => {
        if(indice >= inicio && indice < fin){
            fila.style.display = "table-row";
        }
         else {
            fila.style.display = "none";
         }
    });
}   

botonSiguiente.addEventListener('click', function(){
    if(Pagina * filasPorPagina < filas.length){
        Pagina = Pagina + 1;
        mostrarPeliculas();
    }else{
        alert("No hay mas peliculas");
    }

});

botonAnterior.addEventListener('click', function(){
    if(Pagina > 1){
        Pagina = Pagina - 1;
        mostrarPeliculas();
    }else{
        alert("No hay mas peliculas");
    }
});

mostrarPeliculas();

//que funcione mi select de generos

const generosPeliculas = { 
    "Inception": ["Ciencia Ficción", "Accion", "Drama"], 
    "Titanic": ["Romance", "Drama"], 
    "El Padrino": ["Drama"], 
    "Jurassic Park": ["Ciencia Ficción", "Accion"], 
    "Interstellar": ["Ciencia Ficción", "Drama"], 
    "Avengers: Endgame": ["Ciencia Ficción", "Accion"], 
    "El Conjuro": ["Terror"], 
    "Forrest Gump": ["Drama", "Romance"], 
    "Avatar": ["Ciencia Ficción", "Accion"], 
    "El Señor de los Anillos": ["Accion", "Drama"], 
    "Interestelar": ["Ciencia Ficción", "Drama"], 
    "Joker": ["Drama"], "Spider-Man": ["Accion", 
    "Ciencia Ficción"], "Rocky": ["Drama", "Accion"], 
    "Toy Story": ["Animación", "Comedia"], 
    "Alien": ["Ciencia Ficción", "Terror"], 
    "Harry Potter": ["Accion", "Drama"], 
    "Mad Max: Fury Road": ["Accion", "Ciencia Ficción"], 
    "Parásitos": ["Drama"], "Los Increíbles": ["Animación", "Accion", "Comedia"], 
    "Gladiador": ["Accion", "Drama"], "Shrek": ["Animación", "Comedia"],
    "El Caballero de la Noche": ["Accion", "Drama"], 
    "Buscando a Nemo": ["Animación", "Comedia"], 
    "La La Land": ["Romance", "Drama"], 
    "Top Gun: Maverick": ["Accion", "Drama"], 
    "El Silencio de los Inocentes": ["Terror", "Drama"], 
    "Ratatouille": ["Animación", "Comedia"], 
    "John Wick": ["Accion"], "Oppenheimer": ["Drama"], 
    "Barbie": ["Comedia", "Romance"], "Superbad": ["Comedia"], 
    "El Exorcista": ["Terror"], "Whiplash": ["Drama"], 
    "Spider-Man: No Way Home": ["Accion", "Ciencia Ficción"], 
    "Jurassic World": ["Ciencia Ficción", "Accion"], 
    "Coraline": ["Animación", "Terror"], 
    "La Lista de Schindler": ["Drama"], 
    "Deadpool": ["Accion", "Comedia"], 
    "WALL-E": ["Animación", "Ciencia Ficción"], 
    "Psicosis": ["Terror"], "Creed": ["Drama", "Accion"], 
    "Los Juegos del Hambre": ["Accion", "Ciencia Ficción"], 
    "Ocean's Eleven": ["Comedia", "Drama"], 
    "El Gran Hotel Budapest": ["Comedia", "Drama"], 
    "Terminator 2": ["Ciencia Ficción", "Accion"], 
    "El Resplandor": ["Terror", "Drama"], 
    "Matrix": ["Ciencia Ficción", "Accion"]
};


const peliculas = document.querySelectorAll('#tabla-peliculas th');
const selecGenero = document.querySelector('#pelicula');

selecGenero.addEventListener('change', function(){

    const generoSeleccionado = selecGenero.value;

    peliculas.forEach((pelicula)=>{
        const nombre = pelicula.textContent.trim();

        if(generosPeliculas[nombre].includes(generoSeleccionado)){
            pelicula.style.display = "table-cell";   
        }else{
            pelicula.style.display = "none";
        }
    });

});