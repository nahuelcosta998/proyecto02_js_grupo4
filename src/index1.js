//PUNTO UNO
let numero1 = 10;
let numero2 = 15;

function calcularMayor(numero1, numero2) {
  if (numero1 > numero2) {
    alert("El número mayor es: " + numero1);
  } else if (numero2 > numero1) {
    alert("El número mayor es: " + numero2);
  } else {
    alert("Ambos números son iguales: " + numero1);
  }
}

calcularMayor(numero1,numero2);