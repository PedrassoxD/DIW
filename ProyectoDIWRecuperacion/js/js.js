/* Alternar entre añadir y quitar la clase "responsive" al topnav cuando el usuario hace clic en el icono */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Funcion del boton del RandomCocktail para mostrar el card */

function mostrar() {
    document.getElementById('contenedor').style.display = "none";
    document.getElementById('contenedor').style.display = "block";
}