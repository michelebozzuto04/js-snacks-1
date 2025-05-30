let array = [];

for (let i = 0; i < 6; i++) {
    userInput = Number(prompt("Inserisci un numero:"));
    if (userInput % 2 != 0) {
        array.push(userInput);
    }
}

console.log(array);