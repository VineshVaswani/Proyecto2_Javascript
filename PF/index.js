// Creamos la funcion para crear la encuesta con pregunta y opciones
function crearEncuesta (pregunta, opciones){
  return {
    pregunta,
    opciones,
    votos: new Array (opciones.length).fill(0)
  };
}

// array, con todas las preguntas de la encuesta agrupadas en 1 constante
const encuestas = [
  crearEncuesta ("pregunta 1", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 2", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 3", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 4", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 5", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 6", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 7", ["opcion 1", "opcion 2", "opcion 3"]),
  crearEncuesta ("pregunta 8", ["opcion 1", "opcion 2", "opcion 3"])
];

// crear la funcin para votar

function votar (encuesta, indiceOpcion){
  if (typeof indiceOpcion !== "number" || indiceOpcion < 0 || indiceOpcion >= encuesta.opciones.length) {
    throw new Error ("El indice debe ser un número")
  }
  const nuevosVotos = encuesta.votos.map((voto, indice) => {
    if (indice === indiceOpcion) {
      return voto + 1;
    }
    else {
      return voto;
    }
  });

  return {
    ...encuesta, votos: nuevosVotos
  }
  
}

encuestas.forEach ((encuesta, index) => {

  // Mnsaje que sale al usuario con espacio

  let mensaje = encuesta.pregunta + "\n";
  encuesta.opciones.forEach((opcion, i) => {
    mensaje = mensaje + i + ". " + opcion +"\n";
  });

// Pedir respuesta por prompt y transformar en numero

const entrada = prompt (mensaje);
const voto = parseInt (entrada);

// Verificacion de voto

if (!isNaN(voto) && voto >= 0 && voto < encuesta.opciones.length) {
  const encuestaActualizada = votar(encuesta, voto);
  encuestas[index] = encuestaActualizada;
} else {
  throw new Error ("Voto inválido");
}

// Mostrar resultados en consola, por cada pregunta con for el for each anterior

console.log("Resultados para: "+ encuesta.pregunta);

encuesta.opciones.forEach((opcion, indice) => {
  console.log(opcion + ". " + encuestas[index].votos[indice] + " votos");
});
  console.log("\n");

});

