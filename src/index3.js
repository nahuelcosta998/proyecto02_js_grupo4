let cadena = prompt("Ingrese una cadena de carácteres que incluya signos de pregunta '?' y números del 0 al 4 ")
let bandera = true;


for (let i = 0; i < cadena.length; i++) 
{

    if (cadena[i] !== "?" && cadena[i] !== "0" && cadena[i] !== "1" && cadena[i] !== "2" && cadena[i] !== "3" && cadena[i] !== "4") 
    {
        bandera = false;
        break;
    }  
}

if (bandera) 
{
    cadena = sumarCaracter(cadena)
    document.getElementById("salida").textContent = cadena;
    alert(cadena);
} else 
    {
        alert("No se ingresó una cadena de carácteres correcta");
    }

function sumarCaracter(cadena)
{
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) 
    {
        if (cadena[i] === "?") 
        {
            let izquierda = parseInt(cadena[i - 1]) || 0;
            let derecha = parseInt(cadena[i + 1]) || 0;
            resultado += (izquierda + derecha).toString();
        } else 
            {
                resultado += cadena[i];
            }
    }

    return resultado;
}