function validarLogin(event, destino) {
    event.preventDefault();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!correo.endsWith('@gmail.com') && !correo.endsWith('@duocuc.cl')) {
        alert('El correo debe terminar con "@gmail.com" o con "@duocuc.cl".');
        return false;
    }
    if (password.length === 0) {
        alert('Por favor ingresa tu contraseña.');
        return false;
    }
    if (password.length >= 4 && password.length <= 10) {
        window.location.href = destino;
        return true;
    }
    else {
        alert('La contraseña debe tener entre 4 y 10 caracteres.');
        return false;
    }
    
}

function registrarUsuario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const terminos = document.getElementById('terminos').checked;

    // Validar nombre
    if (nombre.length === 0) {
        alert('Por favor ingresa tu nombre completo.');
        return false;
    }

    // Validar correo
    if (!correo.endsWith('@gmail.com') && !correo.endsWith('@duocuc.cl')) {
        alert('El correo debe terminar con "@gmail.com" o con "@duocuc.cl".');
        return false;
    }

    // Validar contraseña
    if (password.length < 4 || password.length > 10) {
        alert('La contraseña debe tener entre 4 y 10 caracteres.');
        return false;
    }

    // Validar confirmación de contraseña
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    // Validar términos y condiciones
    if (!terminos) {
        alert('Debes aceptar los términos y condiciones.');
        return false;
    }

    // Si todo es válido, redirigir a la página de inicio de sesión
    alert('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');
    window.location.href = 'Sesion.html';
    return true;
}