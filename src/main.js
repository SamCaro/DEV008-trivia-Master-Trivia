
const botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', function(event) {
event.preventDefault();

document.getElementById("cajaPreguntas").style.display = "block";
  
const nombre = document.getElementById('nombre').value;
document.getElementById('nombreMostrado').textContent =  `¡Hola, ${nombre}! Esta es nuestra 
trivia`;
});

let correctas = [3,2,1];
let opcion_elegida=[];
let cantidad_correctas=0;


  document.getElementById("cajaPreguntas").style.display = "none";

function respuesta(num_pregunta, seleccionada) {
opcion_elegida[num_pregunta] = seleccionada.value;
}

function corregir(){
cantidad_correctas = 0;
for(i=0; i < correctas.length; i++){
if(correctas[i]==opcion_elegida[i]){
  cantidad_correctas++;
}
}
document.getElementById("resultado").innerHTML = cantidad_correctas;
alert("Pregunta 1 Bogotá - Pregunta 2 Santiago - Pregunta 3 Gabriel García Marquez");

}