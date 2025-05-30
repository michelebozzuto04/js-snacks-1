let userRepeat = Number(prompt("Inserisci il numero di volte che vuoi ripetere l'inserimento:"));

for (let i = 0; i < userRepeat; i++) {
    userInput = Number(prompt("Inserisci un numero:"));
    inputCubo = Math.pow(userInput, 2);
    console.log(inputCubo);
}