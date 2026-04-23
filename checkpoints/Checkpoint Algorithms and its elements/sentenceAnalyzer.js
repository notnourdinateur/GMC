// Sentence Analyzer
// GoMyCode Checkpoint - Algorithms and its elements
// Nour-Eddine Nafzaoui

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence ending with a point: ", (sentence) => {
    let length = 0; 
    let words = 1;
    let vowels = 0;

    const vowelList = "aeiouAEIOU";

    for (let k = 0; k < sentence.length; k++) {
        const ch = sentence[k];

        if (ch === ".") {
            length++;
            break;
        }

        length++;

        if (ch === " ") {
            words++;
        }

        if (vowelList.includes(ch)) {
            vowels++;
        }
    }

    console.log(`Length : ${length}`);
    console.log(`Words  : ${words}`);
    console.log(`Vowels : ${vowels}`);

    rl.close();
});
