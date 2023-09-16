function ResVelocidad() {
    const tiempoInput = document.getElementById('tiempo_velocidad').value;
    const distanciaInput = document.getElementById('distancia_velocidad').value;
    const respuesta = document.getElementById('Respuesta1');

    // Verificar si los valores son numéricos y diferentes de vacío
    if (tiempoInput === '' || distanciaInput === '') {
        respuesta.textContent = 'Por favor, ingrese valores en los campos.';
    } else {
        const tiempo = parseFloat(tiempoInput);
        const distancia = parseFloat(distanciaInput);

        if (isNaN(tiempo) || isNaN(distancia)) {
            respuesta.textContent = 'Por favor, ingrese valores numéricos válidos.';
        } else {
            // Calcular la velocidad
            const resultado = distancia / tiempo;

            // Mostrar el resultado
            respuesta.textContent = `La velocidad es: ${resultado.toFixed(2)} unidades por tiempo.`;
        }
    }
}

function ResTiempo() {
    const velocidadInput = document.getElementById('velocidad_tiempo').value;
    const distanciaInput = document.getElementById('distancia_tiempo').value;
    const respuesta1 = document.getElementById('Respuesta2');

    // Verificar si los valores son numéricos y diferentes de vacío
    if (velocidadInput === '' || distanciaInput === '') {
        respuesta1.textContent = 'Por favor, ingrese valores en los campos.';
    } else {
        const velocidad = parseFloat(velocidadInput);
        const distancia = parseFloat(distanciaInput);

        if (isNaN(velocidad) || isNaN(distancia)) {
            respuesta1.textContent = 'Por favor, ingrese valores numéricos válidos.';
        } else {
            // Calcular tiempo
            const resultado = distancia / velocidad;

            // Mostrar el resultado
            respuesta1.textContent = `El tiempo es: ${resultado.toFixed(2)} unidades por tiempo.`;
        }
    }
}


function ResDistancia() {
    const velocidadInput = document.getElementById('velocidad_distancia').value;
    const tiempoInput = document.getElementById('tiempo_distancia').value;
    const respuesta2 = document.getElementById('Respuesta3');

    // Verificar si los valores son numéricos y diferentes de vacío
    if (velocidadInput === '' || tiempoInput === '') {
        respuesta2.textContent = 'Por favor, ingrese valores en los campos.';
    } else {
        const velocidad = parseFloat(velocidadInput);
        const tiempo = parseFloat(tiempoInput);

        if (isNaN(velocidad) || isNaN(tiempo)) {
            respuesta2.textContent = 'Por favor, ingrese valores numéricos válidos.';
        } else {
            // Calcular Distancia
            const resultado = tiempo * velocidad;

            // Mostrar el resultado
            respuesta2.textContent = `La distancia es: ${resultado.toFixed(2)} unidades por tiempo.`;
        }
    }
}

function ResInicial() {
    const VelFinalInput = document.getElementById('velocidad_final_vi').value;
    const AceleracionInput = document.getElementById('aceleracion_vi').value;
    const TiempoInput = document.getElementById('tiempo_vi').value;
    const Respuesta3 = document.getElementById('Respuesta4')

    // Verificar si los valores son numéricos y diferentes de vacío
    if (VelFinalInput === '' || AceleracionInput === '' || TiempoInput === '') {
        Respuesta3.textContent = 'Por favor, ingrese valores en los campos.';
    } else {
        const velocidadFinal = parseFloat(VelFinalInput);
        const Aceleracion = parseFloat(AceleracionInput);
        const Tiempo = parseFloat(TiempoInput);

        // Calcular Velocidad Inicial
        const resultado = velocidadFinal - Aceleracion * Tiempo;

        // Mostrar el resultado
        Respuesta3.textContent = `La Velocidad Inicial es: ${resultado.toFixed(2)} unidades por tiempo.`;

    }
}

function ResAceleracion() {
    const VelInicialInput = document.getElementById('velocidad_inicial_a').value;
    const VelocidadFinalInput = document.getElementById('velocidad_final_a').value;
    const TiempoInput = document.getElementById('tiempo_a').value;
    const Respuesta4 = document.getElementById('Respuesta5')

    // Verificar si los valores son numéricos y diferentes de vacío
    if (VelInicialInput === '' || VelocidadFinalInput === '' || TiempoInput === '') {
        Respuesta4.textContent = 'Por favor, ingrese valores en los campos.';
    } else {
        const velocidadInicial = parseFloat(VelInicialInput);
        const VelocidadFinal = parseFloat(VelocidadFinalInput);
        const Tiempo = parseFloat(TiempoInput);

        // Calcular Aceleracion
        const resultado = VelocidadFinal-velocidadInicial / Tiempo;

        // Mostrar el resultado
        Respuesta4.textContent = `La Aceleracion es: ${resultado.toFixed(2)} unidades por tiempo.`;

    }
}

function ResFinal() {
    const VelInicialInput = document.getElementById('velocidad_inicial_vf').value;
    const AceleracionInput = document.getElementById('aceleracion_vf').value;
    const TiempoInput = document.getElementById('tiempo_vf').value;
    const Respuesta5 = document.getElementById('Respuesta6')

    // Verificar si los valores son numéricos y diferentes de vacío
    if (VelInicialInput === '' || AceleracionInput === '' || TiempoInput === '') {
        Respuesta5.textContent = 'Por favor, ingrese valores en los campos.';
    } else {
        const velocidadInicial = parseFloat(VelInicialInput);
        const Aceleracion = parseFloat(AceleracionInput);
        const Tiempo = parseFloat(TiempoInput);

        // Calcular Aceleracion
        const resultado = velocidadInicial + Aceleracion * Tiempo;

        // Mostrar el resultado
        Respuesta5.textContent = `La Velocidad Final es: ${resultado.toFixed(2)} unidades por tiempo.`;

    }
}











