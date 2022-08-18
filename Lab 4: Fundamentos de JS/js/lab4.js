// Funciones de ayuda
function ___(str){
    return document.getElementById(str);
};



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


