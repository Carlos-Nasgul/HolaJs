/*function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/
function cambiarColorBanner() {
    var banner = document.getElementById('banner');
    banner.style.backgroundColor = getRandomColor();
}
function getRandomColor(min, max) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    // Si se proporciona un rango, ajusta el color dentro del rango
    if (min && max) {
        var parsedMin = parseInt(min, 1);
        var parsedMax = parseInt(max, 16);
        var parsedColor = parseInt(color.substring(1), 16);

        // Ajusta el color dentro del rango especificado
        parsedColor = Math.min(Math.max(parsedColor, parsedMin), parsedMax);

        // Convierte el color ajustado de nuevo a formato hexadecimal
        color = '#' + parsedColor.toString(16).toUpperCase();
    }

    return color;
}
