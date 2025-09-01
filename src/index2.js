function calcularPromedio() {
      
      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));
      let num3 = parseFloat(prompt("Ingresa el tercer número:"));

      
      let promedio = (num1 + num2 + num3) / 3;

        alert("Promedio: " + promedio);
    }

    calcularPromedio();