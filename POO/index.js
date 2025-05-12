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

const encuesta1 = new Encuesta("pregunta 1", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta2 = new Encuesta("pregunta 2", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta3 = new Encuesta("pregunta 3", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta4 = new Encuesta("pregunta 4", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta5 = new Encuesta("pregunta 5", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta6 = new Encuesta("pregunta 6", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta7 = new Encuesta("pregunta 7", ["opcion 1", "opcion 2", "opcion 3"])
const encuesta8 = new Encuesta("pregunta 8", ["opcion 1", "opcion 2", "opcion 3"])

const encuestas = [encuesta1,encuesta2,encuesta3,encuesta4,encuesta5, encuesta6,encuesta7,encuesta8]

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

const entrada = prompt("Ingresa el número de tu opción:");
const voto = parseInt (entrada);

// Registrar voto
encuesta.votar(voto);

//mostrar resutados

encuesta.mostrarResultados();

});