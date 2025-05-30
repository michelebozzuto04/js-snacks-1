const string1 = prompt("Inserisci una parola:");
const string2 = prompt("Inserisci un'altroa parola:");

if (string1.length > string2.length) {
    console.log(string1, string2);
} else if (string2.length > string1.length) {
    console.log(string2, string1);
} else {
    console.log("Le due parole hanno la stessa lunghezza");
}