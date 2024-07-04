//Actividad #1: Mostrá en la consola los números del 1 al 10

for (let num = 10; num > 0; num = num - 1) {

    console.log(num)
}
//Actividad #2: Mostrá en la consola los números del 15 al 5
for (let num2 = 15; num2 > 4; num2 = num2-1) {
    console.log(num2)
    
}
// Actividad #3: Mostrá en la consola los números impares del 1 al 100
for (let num3 = 1; num3 < 100; num3 = num3+2) {
    console.log(num3);
    
}
let num3 = 1;
while (num3 <= 100) {
    console.log(num3);
    num3 += 2;
} 
    
    // Incrementamos de 2 en 2 para obtener los impares

// Actividad #4: Mostrá en la consola la tabla de multiplicación del 7

for (let num4 = 1; num4 < 11; num4 = num4 + 1) {
    let resultado = 7*num4
    console.log(resultado)
    
}
let num4 = 1;
while (num4 <= 10) {
    let resultado = 7 * num4;
    console.log(resultado);
    num4++;
}
