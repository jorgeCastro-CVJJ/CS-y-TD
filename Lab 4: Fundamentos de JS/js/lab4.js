// Funciones de ayuda
function ___(str){
    return document.getElementById(str);
};
/*


2:
Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

3:
Función: contador. 
Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

4:
Función: promedios. 
Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

5:
Función: inverso. 
Parámetros: Un número. 
Regresa: El número con sus dígitos en orden inverso.

6:
Crea una solución para un problema de tu elección 
(puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, 
un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). 
El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, 
utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. 
Muestra los resultados en el documento HTML.
*/


// 1:
// Entrada: un número pedido con un prompt. 
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
// Utiliza document.write para producir la salida

function potencias() {
    let num = prompt("Ingresa hasta que número deseas obtener información", "Ex. 10");
    if (num != null) {
        str = "";
        for (let i = 0; i < num; i++) {
            resultado = (i+1)*(i+1);
            resultado2 = (i+1)*(i+1)*(i+1);
            str += (i+1) + ".- Su cuadrado es: " + resultado + ", Su cubo es: " + resultado2 + "<br>";
        }
    document.getElementById("demo").innerHTML = str;
    }
}

const numeros = [2,3,0,10,20,0,-3,-345,34,12,-63,-33,3,0];
function contador(numeros){
    let negative,zeros,moreThanZero;

    for(let i of numeros ){
        if(i > 0){
            moreThanZero++; 
        }else if(i === 0){
            zeros++;
        } else {negative++}
    };
    console.log("Cantidad de ceros: " + zeros);
    console.log("Cantidad de más de cero: " + moreThanZero);
    console.log("Cantidad de negativos: " + negative);

};

const funcion_contador = contador;


