let sum = null;

for (let i = 0; i < 10; i++) {
    userInput = Number(prompt("Inserisci un numero:"));
    sum = sum + userInput;
    console.log(userInput);
}

console.log("Somma:", sum);