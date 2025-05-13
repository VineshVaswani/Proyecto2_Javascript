// Creamos la clase encuesta con preguntas y opciones, luego array vacio con votos 0

class Encuesta {
    constructor (pregunta, opciones){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.votos = new Array(opciones.length).fill(0);
    }

// Validacion que sea numero, si es valido el voto, sumar 1
    votar (indice) {
        if (typeof indice !== "number") {
            throw new Error ("El indice debe ser un número");
        }
        if (indice >= 0 && indice < this.votos.length){
            this.votos[indice]++;
        }
        else{
            console.log("Opcion invalida");
        }
    }

// Mostrar resultados con .map por cada pregunta recorriendo el array, luego juntando con .join

    mostrarResultados () {
        const resumen = this.opciones.map((opcion, indice) => {
            return opcion + " tiene: " + this.votos[indice] + " votos";
        });

        console.log("\n" + this.pregunta);
        console.log(resumen.join("\n"));
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

    encuestas.push(new Encuesta(pregunta, opciones));
}

// For each -> recorrer todas las encuestas y mostar al usuario la pregunta de la encusta en la que esta

encuestas.forEach((encuesta, indice) => {
    console.log("\n"+ (indice + 1));
    console.log(encuesta.pregunta);

// Mostrar las opciones a los usuarios

    encuesta.opciones.forEach((opcion, indice) => {
        console.log(indice + ". " + opcion);
    });


//Crear mensaje para el usuario

let mensaje = encuesta.pregunta + "\n";
encuesta.opciones.forEach((opcion, indice) => {
    mensaje = mensaje + indice + ". " + opcion + "\n";
});

//solicitar respuesta al usuario

const entrada = prompt(mensaje);
const voto = parseInt (entrada);

// Registrar voto
encuesta.votar(voto);

//mostrar resutados

encuesta.mostrarResultados();

});