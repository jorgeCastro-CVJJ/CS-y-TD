// variables, constantes, consola (log, )

let pulpos_mundial = "Paul";

var pulpos_boys = "Timoty";

const precio_comida_pulpos = 99.99;

console.log(pulpos_mundial);
console.warn("Cuidado");
console.assert(1 === 1);
console.assert(true === 1);
console.assert(true == 1);

console.error("Error")

console.log("Precio: " + precio_comida_pulpos);

// alert, prompt, confirm

alert("Esto es una alerta")

const nombre = prompt("¿Cómo te llamas?");

console.log("Hola," + nombre + "!");

const is_hungry = confirm("¿Tienes hambre?");

if(!is_hungry){
    alert("Tienes que comer bien aunque no tengas hambre :(");
}else {
    alert("Ya mero es l ahora de la comida ;) ");
}


