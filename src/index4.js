/* function toma los valores de los formularios */
function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let libreta = document.getElementById("libreta").value;

    /* lanza un cartel al hacer click al boton */
    alert(
        "Los datos ingresados son: " +
        "Nombre: " + nombre + " " +
        "Apellido: " + apellido + " " +
        "Libreta Universitaria: TUV" + libreta
        );
    }