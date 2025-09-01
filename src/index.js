//PUNTO 5
document.getElementById("calcularPago").onclick = function(){

let horas= Number(document.getElementById("horas").value) ;

let pago= Number(document.getElementById("pago").value) ;

let pagoPorHora = horas * pago ;
if(horas >160) { pagoPorHora = pagoPorHora*1.2;}
document.getElementById("resultado").innerHTML = "Total a cobrar:" +" "+ pagoPorHora ; 
return; 
}


