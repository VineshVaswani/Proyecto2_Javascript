// Creamos la funcion para crear la encuesta con pregunta y opciones
function crearEncuesta (pregunta, opciones) {
  return {
    pregunta,
    opciones,
    votos: new Array (opciones.length).fill(0)
  };
}

// Crear la funcion para votar

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

// Pedir preguntas

let cantidadPreguntas = parseInt(prompt("¿Cuantas preguntas quieres que tenga la encuesta? (minimo 8)"));

while (isNaN(cantidadPreguntas) || cantidadPreguntas < 8) {
  console.log("Debes ingresar al menos 8 preguntas")
  cantidadPreguntas = parseInt(prompt("¿Cuantas preguntas quieres que tenga la encuesta? (minimo 8)"));
}

// Crear las encuestas

const encuestas = [];

for (let i = 0; i < cantidadPreguntas; i++) {
  const pregunta = prompt(`Pregunta ${i+1}`);
  const opcionesTexto = prompt(`Escribe 3 opciones separadas por comas (ej. azul, rojo, verde)`);
  const opciones = opcionesTexto.split(",").map(opcion => opcion.trim());

  if (opciones.length !== 3) {
    console.log ("Debes ingresar exactamente 3 opciones. Reintentando esta pregunta...");
    i--;
    continue;
  }

  encuestas.push(crearEncuesta(pregunta, opciones));
}

encuestas.forEach ((encuesta, index) => {

  // Mnsaje que sale al usuario con espacio

  let mensaje = encuesta.pregunta + "\n";
  encuesta.opciones.forEach((opcion, i) => {
    mensaje = mensaje + i + ". " + opcion +"\n";
  });

// Pedir respuesta por prompt y transformar en numero

const entradaVoto = prompt (mensaje);
const voto = parseInt (entradaVoto);

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

