document.getElementById('formVotacion').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener el nombre del votante
    const nombreVotante = document.getElementById('nombreVotante').value.trim();
    
    if (!nombreVotante) {
        alert('Por favor, ingresa tu nombre antes de votar.');
        return;
    }

    // Obtener las respuestas seleccionadas
    const respuestas = {};
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        respuestas[input.name] = input.value;
    });

    console.log('Votación enviada:', {
        nombreVotante,
        respuestas,
    });

    // Enviar los datos al servidor
    fetch('http://TU_IP_PUBLICA:3002/guardar-voto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombreVotante,
            respuestas,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('¡Voto registrado con éxito!');
        document.getElementById('formVotacion').reset();
    })
    .catch((error) => {
        console.error('Error al enviar el voto:', error);
        alert('Hubo un problema al enviar tu voto.');
    });
});
