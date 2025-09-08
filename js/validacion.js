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