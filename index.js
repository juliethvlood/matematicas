function name(params) {
    console.log("Hola");
}
const boton = document.getElementById('botonSaludar');
const input = document.getElementById('nombreUsuario');
const salida = document.getElementById('mensaje');

// Escuchamos el clic del botón
boton.addEventListener('click', function() {
    const nombre = input.value;
    if (nombre) {
        salida.innerText = `¡Hola, ${nombre}! Qué bueno verte.`;
    } else {
        salida.innerText = "Por favor, escribe algo primero.";
    }
});