// Función para manejar el envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar la lógica para enviar el formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Por ahora solo mostraremos un mensaje
            alert(`Gracias por tu mensaje, ${nombre}! Te contactaremos en ${email}`);
            formulario.reset();
        });
    }
});
