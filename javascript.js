//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Mejor Corto Documental?",
        op0: {texto: "Death by numbers", img: "Resources/CortoDocumental/DeathbyNumbers.jpg"},
        op1: {texto: "Im ready, Warden", img: "Resources/CortoDocumental/ImReadyWarden.jpg"},
        op2: {texto: "Incident", img: "Resources/CortoDocumental/Incident.jpg"},
        op3: {texto: "Instruments of a Beating Heart", img: "Resources/CortoDocumental/InstrumentsOfABeatingHeart.jpg"},
        op4: {texto: "The Only Girl in the Orchestra", img: "Resources/CortoDocumental/TheOnlyGirlInTheTheOrchestra.jpg"},
    },
    {
        id:1,
        pregunta:"¿Mejor corto de animación?",
        op0: {texto: "Beautiful Men", img: "Resources/CortoAnimacion/BeautifulMen.jpg"},
        op1: {texto: "In the shadow of the cypress", img: "Resources/CortoAnimacion/InTheShadowoftheCypress.jpg"},
        op2: {texto: "Magic Candies", img: "Resources/CortoAnimacion/BeautifulMen.jpg"},
        op3: {texto: "Wander to Wonder", img: "Resources/CortoAnimacion/BeautifulMen.jpg"},
        op4: {texto: "Yuck!", img: "Resources/CortoAnimacion/BeautifulMen.jpg"},
    },
    {
        id:2,
        pregunta:"¿Mejor corto ficción?",
        op0: {texto: "A Lien", img: "Resources/CortoFiccion/A-Lien.jpg"},
        op1: {texto: "Anuja", img: "Resources/CortoFiccion/Anuja.jpg"},
        op2: {texto: "Im not a robot", img: "Resources/CortoFiccion/ImNotARobot.jpg"},
        op3: {texto: "The last ranger", img: "Resources/CortoFiccion/TheLastRanger.jpg"},
        op4: {texto: "El hombre que no pudo permanecer en silencio", img: "Resources/CortoFiccion/ElHombreQueNoPudoPermanecerEnSilencio.jpg"},
    },
    {
        id:3,
        pregunta:"¿Mejores efectos visuales?",
        op0:"Alien:Romulus",
        op1:"Better Men",
        op2:"Dune: Parte 2",
        op3:"Kingdom of the Planet of the Apes",
        op4:"Wicked",
    },
    {
        id:4,
        pregunta:"¿Mejor Maquillaje y Peluquería?",
        op0:"A different Man",
        op1:"Emilia Pérez",
        op2:"Nosferatu",
        op3:"La sustancia",
        op4:"Wicked",
    },
    {
        id:5,
        pregunta:"¿Mejor Diseño de Vestuario?",
        op0:"A Complete Unknown",
        op1:"Cónclave",
        op2:"Gladiator II",
        op3:"Nosferatu",
        op4:"Wicked",
    },
    {
        id:6,
        pregunta:"¿Mejor Diseño de Producción?",
        op0:"The Brutalist",
        op1:"Conclave",
        op2:"Dune: Parte 2",
        op3:"Nosferatu",
        op4:"Wicked",
    },
    {
        id:7,
        pregunta:"¿Mejor Canción Original?",
        op0:"El mal: Emilia Pérez",
        op1:"The Journey: Seis triple ocho",
        op2:"Like a bird: Las vidas de Sing Sing",
        op3:"Mi camino: Emilia Pérez",
        op4:"Never Too Late: Elton John: Never Too Late",
    },
    {
        id:8,
        pregunta:"¿Mejor Banda Sonora?",
        op0:"The Brutalist",
        op1:"Emilia Perez",
        op2:"Cónclave",
        op3:"Wicked",
        op4:"The Wild Robot",
    },
    {
        id:9,
        pregunta:"¿Mejor Sonido?",
        op0:"A Complete Unknown",
        op1:"Dune: Parte 2",
        op2:"Emilia Perez",
        op3:"Wicked",
        op4:"Robot Salvaje",
    },
    {
        id:10,
        pregunta:"¿Mejor Guion Original?",
        op0:"Anora",
        op1:"The Brutalist",
        op2:"A real Pain",
        op3:"September 5",
        op4:"La sustancia",
    }
]

//para guardar las respuestas elegidas
let respuestas = [];
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    for (let i = 0; i <= 4; i++) {
        const label = crearLabel(i, pregunta[`op${i}`].texto, pregunta[`op${i}`].img);
        opciones.appendChild(label);
    }

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}


//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion, imgSrc){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta + "," + num + ")");
    
    const span = document.createElement("span");
    span.textContent = txtOpcion;

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = txtOpcion;
    img.style.width = "50px";
    img.style.marginLeft = "10px";

    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(img);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

// Función para descargar las respuestas
function descargarRespuestas() {
  const downloadButton = document.getElementById("descargarRespuestas");
    downloadButton.style.pointerEvents = "none"; // Desactiva los eventos del puntero
    downloadButton.style.opacity = "0.5"; 

    const respuestasTexto = respuestas.map((respuesta, index) => {
        const pregunta = bd_juego[index];
        let opcionSeleccionada;

        // Verifica si la opción seleccionada es un objeto o una cadena
        if (typeof pregunta[`op${respuesta}`] === 'object') {
            opcionSeleccionada = pregunta[`op${respuesta}`].texto; // Accede a la propiedad 'texto'
        } else {
            opcionSeleccionada = pregunta[`op${respuesta}`]; // Es una cadena de texto
        }

        return `Pregunta ${index + 1}: ${opcionSeleccionada}`;
    }).join('\n');

    const blob = new Blob([respuestasTexto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'respuestas.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

$(".download-btn").click(function() {
  $(".download").toggleClass("download--animate");
  $(".bar").toggleClass("bar--animate");
  $(".btn__arrow").toggleClass("btn__arrow--animate");
  $(".btn__stop").toggleClass("btn__stop--animate");
  $(".btn__done").toggleClass("btn__done--animate");
});