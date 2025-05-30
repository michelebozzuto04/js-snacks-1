const num1 = prompt("Inserisci un numero:");
const num2 = prompt("Inserisci un altro numero:");

if (num1 > num2) {
    console.log("Il numero più grande è:", num1);
} else if (num2 > num1) {
    console.log("Il numero più grande è:", num2);
} else {
    console.log("I numeri sono uguali");
}