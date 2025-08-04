// Iteration 1 
const hacker1 = "Adam";
console.log("The driver's name is", hacker1);

const hacker2 = "Eve";
console.log("The navigator's name is", hacker2);

// Iteration 2 

const nameLength = (hacker1, hacker2) => { 
    if (hacker1.length === hacker2.length) {
         console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    } else if (hacker2.length > hacker1.length) {
         console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else if (hacker1.length > hacker2.length) {
         console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else {
        console.log("Something is wrong!");
}};

nameLength(hacker1, hacker2);

// Iteration 3.1
const capitaliseAndSpaceString = (string) => {
    let capitalisedSpacedString = "";
    for (let i=0; i<string.length; i++) {
            const newChar = string[i].toUpperCase() + " ";
            capitalisedSpacedString += newChar;
}   return console.log(capitalisedSpacedString);;
}

capitaliseAndSpaceString(hacker1);

// Iteration 3.2


const reverseString = (string) => {
    let reversedString = "";
    for (let i=string.length-1; i>=0; i--) {
        const reversedChar = string[i];
        reversedString += reversedChar;
} return console.log(reversedString);
}

reverseString(hacker2);

// Iteration 3.3
const lexicographicOrder = (hacker1, hacker2) => {
    if (hacker1>hacker2) {
        console.log("The driver's name goes first.");
    } else if (hacker1<hacker2) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (hacker1=hacker2) {
        console.log("What?! You both have the same name?");
    }
}

lexicographicOrder(hacker1, hacker2);

// Bonus 1



