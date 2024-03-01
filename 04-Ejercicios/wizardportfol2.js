// Este archivo puede contener scripts adicionales para hacer tu sitio web más interactivo.

// Por ejemplo, podrías agregar un script para cambiar el color de fondo al hacer clic en un botón.

document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var cambiarColorBoton = document.getElementById('cambiarColorBoton');

    cambiarColorBoton.addEventListener('click', function () {
        // Cambiar el color de fondo del body al hacer clic en el botón
        body.style.backgroundColor = getRandomColor();
    });

    // Función para obtener un color aleatorio en formato hexadecimal
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
