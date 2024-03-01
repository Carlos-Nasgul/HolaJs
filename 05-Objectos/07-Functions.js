function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log('Dibujando linea entre puntos...') }
}
/* NO HACER-------------------------------------------
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function () { console.log('Dibijando...'); }
 `);

const p = new Point(1, 2);
console.log(p);*/

let punto = { z: 5 };
Punto.call(punto, 1, 3);

console.log(punto);