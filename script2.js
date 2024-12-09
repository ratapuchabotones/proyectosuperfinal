const formulario = document.getElementById('registroForm');
const correoGenerado = document.getElementById('correoGenerado');
const mensajeContraseña = document.getElementById('mensajeContraseña');
const mensajeVerificacion = document.getElementById('mensajeVerificacion');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreCompleto = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const contraseña = document.getElementById('contraseña').value;
    const verificacion = document.getElementById('verificacion').value;

    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{9,}$/;

    if (contraseña !== verificacion) {
        mensajeVerificacion.innerHTML = "Las contraseñas no coinciden.";
        mensajeVerificacion.style.color = 'red';
        return;
    } else {
        mensajeVerificacion.innerHTML = "";
    }

    if (!regexContraseña.test(contraseña)) {
        mensajeContraseña.innerHTML = "La contraseña debe tener al menos una mayúscula, una minúscula, un carácter especial y ser mayor a 8 caracteres.";
        mensajeContraseña.style.color = 'red';
        return;
    } else {
        mensajeContraseña.innerHTML = "Contraseña válida.";
        mensajeContraseña.style.color = 'green';
    }

    const nombres = nombreCompleto.split(' ');
    const apellidosArray = apellidos.split(' ');

    const primerNombre = nombres[0];
    const segundaLetraNombre = primerNombre.length > 1 ? primerNombre.substring(1, 3) : primerNombre;
    const segundoNombre = nombres.length > 1 ? nombres[1] : nombres[0];
    const ultimasCuatroLetras = segundoNombre.slice(-5);

    const primerApellido = apellidosArray[0];
    const primeraLetraApellido = primerApellido.charAt(0);
    const segundoApellido = apellidosArray.length > 1 ? apellidosArray[1] : apellidosArray[0];
    const ultimasDosLetrasApellido = segundoApellido.slice(-2);

    const fechaParts = fechaNacimiento.split('-');
    const anio = fechaParts[0];
    const dosUltimosAnio = anio.slice(-2);

    var correo = `${primeraLetraApellido}${segundaLetraNombre}${ultimasDosLetrasApellido}${ultimasCuatroLetras}${dosUltimosAnio}@gmail.com`;

    correoGenerado.innerHTML = `Correo generado: <strong>${correo}</strong>`;
    correoGenerado.style.color = 'blue';
    
    localStorage.setItem('correo', correo);
    localStorage.setItem('contraseña', contraseña);
});
