function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let libreta = document.getElementById("libreta").value;

    alert(
        "Los datos ingresados son: " +
        "Nombre: " + nombre + " " +
        "Apellido: " + apellido + " " +
        "Libreta Universitaria: TUV" + libreta
        );
    }