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
        op2: {texto: "Magic Candies", img: "Resources/CortoAnimacion/MagicCandies.jpg"},
        op3: {texto: "Wander to Wonder", img: "Resources/CortoAnimacion/WandertoWonder.jpg"},
        op4: {texto: "Yuck!", img: "Resources/CortoAnimacion/Yuck.jpg"},
    },
    {
        id:2,
        pregunta:"¿Mejor corto ficción?",
        op0: {texto: "A Lien", img: "Resources/CortoFiccion/A-Lien.jpg"},
        op1: {texto: "Anuja", img: "Resources/CortoFiccion/Anuja.jpg"},
        op2: {texto: "Im not a robot", img: "Resources/CortoFiccion/ImNotARobot.jpg"},
        op3: {texto: "The last ranger", img: "Resources/CortoFiccion/TheLastRanger.jpg"},
        op4: {texto: "The man who could not remain silent", img: "Resources/CortoFiccion/TheManWhoCouldNotRemainSilent.jpg"},
    },
    {
        id:3,
        pregunta:"¿Mejores efectos visuales?",
        op0: {texto: "Alien: Romulus", img: "Resources/EfectosVisuales/AlienRomulus.jpg"},
        op1: {texto: "Better Men", img: "Resources/EfectosVisuales/BetterMen.jpg"},
        op2: {texto: "Dune: Parte 2", img: "Resources/EfectosVisuales/DuneParte2.jpg"},
        op3: {texto: "Kingdom of the Planet of the Apes", img: "Resources/EfectosVisuales/KingdomOfThePlanetOfTheApes.jpg"},
        op4: {texto: "Wicked", img: "Resources/EfectosVisuales/Wicked.jpg"},
    },
    {
        id:4,
        pregunta:"¿Mejor Maquillaje y Peluquería?",
        op0: {texto: "A different Man", img: "Resources/MaquillajePeluqueria/A-Different-Man.jpg"},
        op1: {texto: "Emilia Pérez", img: "Resources/MaquillajePeluqueria/EmiliaPerez.jpg"},
        op2: {texto: "Nosferatu", img: "Resources/MaquillajePeluqueria/Nosferatu.jpg"},
        op3: {texto: "La sustancia", img: "Resources/MaquillajePeluqueria/LaSustancia.jpg"},
        op4: {texto: "Wicked", img: "Resources/MaquillajePeluqueria/Wicked.jpg"},
    },
    {
        id:5,
        pregunta:"¿Mejor Diseño de Vestuario?",
        op0: {texto: "A Complete Unknown", img: "Resources/DiseñoVestuario/ACompleteUnknown.jpg"},
        op1: {texto: "Cónclave", img: "Resources/DiseñoVestuario/Conclave.jpg"},
        op2: {texto: "Gladiator II", img: "Resources/DiseñoVestuario/GladiatorII.jpeg"},
        op3: {texto: "Nosferatu", img: "Resources/DiseñoVestuario/Nosferatu.jpg"},
        op4: {texto: "Wicked", img: "Resources/DiseñoVestuario/Wicked.jpg"},
    },
    {
        id:6,
        pregunta:"¿Mejor Diseño de Producción?",
        op0: {texto: "The Brutalist", img: "Resources/DiseñoProduccion/TheBrutalist.jpg"},
        op1: {texto: "Conclave", img: "Resources/DiseñoProduccion/Conclave.jpg"},
        op2: {texto: "Dune: Parte 2", img: "Resources/DiseñoProduccion/DuneParte2.jpg"},
        op3: {texto: "Nosferatu", img: "Resources/DiseñoProduccion/Nosferatu.jpg"},
        op4: {texto: "Wicked", img: "Resources/DiseñoProduccion/Wicked.jpg"},
    },
    {
        id:7,
        pregunta:"¿Mejor Canción Original?",
        op0: {texto: "El mal: Emilia Pérez", img: "Resources/CancionOriginal/ElMalEmiliaPerez.jpeg"},
        op1: {texto: "The Journey: Seis triple ocho", img: "Resources/CancionOriginal/TheJourneySeisTripleOcho.jpg"},
        op2: {texto: "Like a bird: Las vidas de Sing Sing", img: "Resources/CancionOriginal/LikeABirdLasVidasDeSingSing.jpg"},
        op3: {texto: "Mi camino: Emilia Pérez", img: "Resources/CancionOriginal/MiCaminoEmiliaPerez.jpeg"},
        op4: {texto: "Never Too Late: Elton John", img: "Resources/CancionOriginal/NeverTooLateEltonJohn.jpeg"},
    },
    {
        id:8,
        pregunta:"¿Mejor Banda Sonora?",
        op0: {texto: "The Brutalist", img: "Resources/BandaSonora/TheBrutalist.png"},
        op1: {texto: "Emilia Perez", img: "Resources/BandaSonora/EmiliaPerez.png"},
        op2: {texto: "Cónclave", img: "Resources/BandaSonora/Conclave.png"},
        op3: {texto: "Wicked", img: "Resources/BandaSonora/Wicked.png"},
        op4: {texto: "The Wild Robot", img: "Resources/BandaSonora/TheWildRobot.png"},
    },
    {
        id:9,
        pregunta:"¿Mejor Sonido?",
        op0: {texto: "A Complete Unknown", img: "Resources/Sonido/ACompleteUnknown.jpeg"},
        op1: {texto: "Dune: Parte 2", img: "Resources/Sonido/DuneParte2.jpeg"},
        op2: {texto: "Emilia Perez", img: "Resources/Sonido/EmiliaPerez.jpg"},
        op3: {texto: "Wicked", img: "Resources/Sonido/Wicked.jpeg"},
        op4: {texto: "Robot Salvaje", img: "Resources/Sonido/RobotSalvaje.jpeg"},
    },
    {
        id:10,
        pregunta:"¿Mejor Guion Original?",
        op0: {texto: "Anora", img: "Resources/GuionOriginal/Anora.jpeg"},
        op1: {texto: "The Brutalist", img: "Resources/GuionOriginal/TheBrutalist.jpg"},
        op2: {texto: "A real Pain", img: "Resources/GuionOriginal/ARealPain.jpeg"},
        op3: {texto: "September 5", img: "Resources/GuionOriginal/September5.jpeg"},
        op4: {texto: "La sustancia", img: "Resources/GuionOriginal/LaSustancia.jpeg"},
    },
    {
        id: 11,
        pregunta: "¿Mejor Guion Adaptado?",
        op0: { texto: "A Complete Unknown", img: "Resources/GuionAdaptado/ACompleteUnknown.jpeg" },
        op1: { texto: "Cónclave", img: "Resources/GuionAdaptado/Conclave.jpg" },
        op2: { texto: "Emilia Pérez", img: "Resources/GuionAdaptado/EmiliaPerez.jpg" },
        op3: { texto: "Nickel Boys", img: "Resources/GuionAdaptado/NickelBoys.jpg" },
        op4: { texto: "Las vidas de Sing Sing", img: "Resources/GuionAdaptado/LasVidasDeSingSing.jpg" },
    },
    {
        id: 12,
        pregunta: "¿Mejor Fotografía?",
        op0: { texto: "The Brutalist", img: "Resources/Fotografia/TheBrutalist.jpg" },
        op1: { texto: "Dune: Parte dos", img: "Resources/Fotografia/DuneParteDos.jpeg" },
        op2: { texto: "Emilia Pérez", img: "Resources/Fotografia/EmiliaPerez.jpg" },
        op3: { texto: "María Callas", img: "Resources/Fotografia/MariaCallas.jpeg" },
        op4: { texto: "Nosferatu", img: "Resources/Fotografia/Nosferatu.jpg" },
    },
    {
        id: 13,
        pregunta: "¿Mejor Montaje?",
        op0: { texto: "Anora", img: "Resources/Montaje/Anora.jpg" },
        op1: { texto: "The Brutalist", img: "Resources/Montaje/TheBrutalist.jpg" },
        op2: { texto: "Cónclave", img: "Resources/Montaje/Conclave.jpeg" },
        op3: { texto: "Emilia Pérez", img: "Resources/Montaje/EmiliaPerez.jpg" },
        op4: { texto: "Wicked", img: "Resources/Montaje/Wicked.jpeg" },
    },
    {
        id: 14,
        pregunta: "¿Mejor Documental?",
        op0: { texto: "Black Box Diaries", img: "Resources/Documental/BlackBoxDiaries.jpg" },
        op1: { texto: "No Other Land", img: "Resources/Documental/NoOtherLand.jpg" },
        op2: { texto: "Porcelain War", img: "Resources/Documental/PorcelainWar.jpg" },
        op3: { texto: "Soundtrack to a Coup d’Etat", img: "Resources/Documental/SoundtrackToACoup.jpg" },
        op4: { texto: "Sugarcane", img: "Resources/Documental/Sugarcane.jpeg" },
    },
    {
        id: 15,
        pregunta: "¿Mejor Película de Animación?",
        op0: { texto: "Flow", img: "Resources/Animacion/Flow.jpeg" },
        op1: { texto: "Inside Out 2", img: "Resources/Animacion/InsideOut2.jpg" },
        op2: { texto: "Memorias de un Caracol", img: "Resources/Animacion/MemoriasDeUnCaracol.jpg" },
        op3: { texto: "Wallace y Gromit: La venganza se sirve con plumas", img: "Resources/Animacion/WallaceYGromit.jpg" },
        op4: { texto: "Robot Salvaje", img: "Resources/Animacion/RobotSalvaje.jpg" },
    },
    {
        id: 16,
        pregunta: "¿Mejor Película Internacional?",
        op0: { texto: "Aún estoy aquí", img: "Resources/Internacional/AunEstoyAqui.jpg" },
        op1: { texto: "La chica de la aguja", img: "Resources/Internacional/LaChicaDeLaAguja.jpeg" },
        op2: { texto: "Emilia Pérez", img: "Resources/Internacional/EmiliaPerez.jpeg" },
        op3: { texto: "La semilla de la higuera sagrada", img: "Resources/Internacional/LaSemillaDeLaHigueraSagrada.jpg" },
        op4: { texto: "Flow, un mundo que salvar", img: "Resources/Internacional/Flow.jpeg" },
    },
    {
        id: 17,
        pregunta: "¿Mejor Actor de reparto?",
        op0: { texto: "Yura Borisov, por 'Anora'", img: "Resources/ActorReparto/YuraBorisov.jpg" },
        op1: { texto: "Kieran Culkin, por 'A Real Pain'", img: "Resources/ActorReparto/KieranCulkin.jpeg" },
        op2: { texto: "Edward Norton, 'A Complete Unknown'", img: "Resources/ActorReparto/EdwardNorton.jpg" },
        op3: { texto: "Guy Pearce, 'The Brutalist'", img: "Resources/ActorReparto/GuyPearce.jpeg" },
        op4: { texto: "Jeremy Strong, por 'The Apprentice'", img: "Resources/ActorReparto/JeremyStrong.jpeg" },
    },
    {
        id: 18,
        pregunta: "¿Mejor Actriz de reparto?",
        op0: { texto: "Monica Barbaro, por 'A Complete Unknown'", img: "Resources/ActrizReparto/MonicaBarbaro.jpg" },
        op1: { texto: "Ariana Grande, por 'Wicked'", img: "Resources/ActrizReparto/ArianaGrande.jpeg" },
        op2: { texto: "Felicity Jones, por 'The Brutalist'", img: "Resources/ActrizReparto/FelicityJones.jpeg" },
        op3: { texto: "Isabella Rossellini, por 'Cónclave'", img: "Resources/ActrizReparto/IsabellaRossellini.jpg" },
        op4: { texto: "Zoe Saldaña, por 'Emilia Pérez'", img: "Resources/ActrizReparto/ZoeSaldaña.jpg" },
    },
    {
        id: 19,
        pregunta: "¿Mejor Actor Principal?",
        op0: { texto: "Adrien Brody, por 'The Brutalist'", img: "Resources/ActorPrincipal/AdrienBrody.jpg" },
        op1: { texto: "Timothée Chalamet, por 'A Complete Unknown'", img: "Resources/ActorPrincipal/TimotheeChalamet.jpg" },
        op2: { texto: "Colman Domingo, por 'Las vidas de Sing Sing'", img: "Resources/ActorPrincipal/ColmanDomingo.jpg" },
        op3: { texto: "Ralph Fiennes, por 'Cónclave'", img: "Resources/ActorPrincipal/RalphFiennes.jpg" },
        op4: { texto: "Sebastian Stan, por 'El aprendiz'", img: "Resources/ActorPrincipal/SebastianStan.jpg" },
    },
    {
        id: 20,
        pregunta: "¿Mejor Actriz Principal?",
        op0: { texto: "Cynthia Erivo, por 'Wicked'", img: "Resources/ActrizPrincipal/CynthiaErivo.jpg" },
        op1: { texto: "Karla Sofía Gascón, por 'Emilia Pérez'", img: "Resources/ActrizPrincipal/KarlaSofiaGascon.jpeg" },
        op2: { texto: "Mikey Madison, por 'Anora'", img: "Resources/ActrizPrincipal/MikeyMadison.jpg" },
        op3: { texto: "Demi Moore, por 'La sustancia'", img: "Resources/ActrizPrincipal/DemiMoore.jpg" },
        op4: { texto: "Fernanda Torres, por 'Aún estoy aquí'", img: "Resources/ActrizPrincipal/FernandaTorres.jpg" },
    },
    {       
        id: 21,
        pregunta: "¿Mejor Director?",
        op0: { texto: "Sean Baker, por 'Anora'", img: "Resources/Director/SeanBaker.jpg" },
        op1: { texto: "Brady Corbet, por 'The Brutalist'", img: "Resources/Director/BradyCorbet.jpeg" },
        op2: { texto: "James Mangold, por 'A Complete Unknown'", img: "Resources/Director/JamesMangold.jpeg" },
        op3: { texto: "Jacques Audiard, por 'Emilia Pérez'", img: "Resources/Director/JacquesAudiard.jpeg" },
        op4: { texto: "Coralie Fargeat, por 'La sustancia'", img: "Resources/Director/CoralieFargeat.jpeg" },
    },
    {
        id: 22,
        pregunta: "¿Mejor Película?",
        op0: { texto: "'Anora'", img: "Resources/Pelicula/Anora.jpeg" },
        op1: { texto: "'The Brutalist'", img: "Resources/Pelicula/TheBrutalist.jpg" },
        op2: { texto: "'A Complete Unknown'", img: "Resources/Pelicula/ACompleteUnknown.jpeg" },
        op3: { texto: "'Cónclave'", img: "Resources/Pelicula/Conclave.jpg" },
        op4: { texto: "'Dune: Parte dos'", img: "Resources/Pelicula/DuneParte2.jpeg" },
        op5: { texto: "'Emilia Pérez'", img: "Resources/Pelicula/EmiliaPerez.jpg" },
        op6: { texto: "'I’m Still Here'", img: "Resources/Pelicula/ImStillHere.jpeg" },
        op7: { texto: "'Nickel Boys'", img: "Resources/Pelicula/NickelBoys.jpg" },
        op8: { texto: "'La sustancia'", img: "Resources/Pelicula/LaSustancia.jpeg" },
        op9: { texto: "'Wicked'", img: "Resources/Pelicula/Wicked.jpeg" },
    }
];

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
    opciones.className = "opciones-container"; // Clase para el contenedor de opciones

    // Crear dos contenedores para las columnas
    const columnaIzquierda = document.createElement("div");
    columnaIzquierda.className = "columna";
    
    const columnaDerecha = document.createElement("div");
    columnaDerecha.className = "columna";

    // Llenar las columnas con las opciones
    for (let i = 0; i < 10; i++) {
        if (pregunta[`op${i}`]) {
            const label = crearLabel(i, pregunta[`op${i}`].texto, pregunta[`op${i}`].img);
            if (i < 5) {
                columnaIzquierda.appendChild(label); // Primeras 5 en la columna izquierda
            } else {
                columnaDerecha.appendChild(label); // Otras 5 en la columna derecha
            }
        }
    }

    // Agregar las columnas al contenedor de opciones
    opciones.appendChild(columnaIzquierda);
    opciones.appendChild(columnaDerecha);
    
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
function seleccionar(pos, opElegida) {
    respuestas[pos] = opElegida;

    // Limpiar selección anterior
    const labels = document.querySelectorAll(`label`);
    labels.forEach(label => label.classList.remove('selected'));

    // Agregar clase 'selected' al label correspondiente
    const selectedLabel = document.getElementById(`l${pos}${opElegida}`);
    selectedLabel.classList.add('selected');
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

        return `${index + 1}.- ${pregunta.pregunta}: ${opcionSeleccionada}`;
    }).join('\n');

    const blob = new Blob([respuestasTexto], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Quiniela_TheOscars_2025.txt';
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