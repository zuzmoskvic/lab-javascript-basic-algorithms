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
const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sem et orci mollis eleifend. Praesent bibendum metus eu tortor feugiat, vitae consequat metus elementum. Nunc aliquam placerat dui nec porta. Praesent auctor nisi non felis hendrerit, eu elementum tellus vulputate. Nunc in est non enim aliquet volutpat malesuada in metus. Donec facilisis est leo. Maecenas vehicula viverra erat sed fermentum.

Cras a risus urna. Etiam id fermentum risus. Praesent vel tincidunt dui. Etiam ut sapien sit amet diam hendrerit pretium. Fusce nec mauris erat. In consectetur vulputate erat, nec sollicitudin libero sagittis ut. Fusce finibus lorem sed sodales tempor. Curabitur posuere pellentesque finibus. Donec magna diam, consequat eget eros ut, faucibus semper nisi. Nunc nulla nisl, consectetur et arcu ut, lobortis tempor felis. Aenean vitae efficitur libero. Mauris suscipit nunc sit amet congue posuere. Nulla facilisi.

Cras purus ante, semper sed orci non, vulputate tempus justo. Etiam at enim neque. Nulla blandit feugiat magna, non cursus massa viverra sed. Vivamus venenatis purus et faucibus porta. Vivamus at eros et neque laoreet gravida. Donec laoreet, diam iaculis pharetra mattis, nisi purus rutrum velit, eget dictum nulla elit in lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tincidunt ornare efficitur. Nulla nibh eros, hendrerit non lacus eu, fermentum dictum arcu. Phasellus non cursus urna. Aenean hendrerit vestibulum imperdiet.
`

const countNumberOfWords = (string) => {
    let count = 0;
    for (let i=0; i<string.length; i++) 
        { if (string[i] === " " || string[i] === "," || string[i] === ".") { count++};
    } return console.log(count);
};

const countNumberOfEtInstances = (string) => {
    let etCount = 0;
    let lowerCaseString = string.toLowerCase();
        for (let i=0; i<lowerCaseString.length; i++) {
                if (lowerCaseString[i]+lowerCaseString[i+1] === "et" ) {
                    etCount++;
            }
        }
    return console.log(etCount);
};

countNumberOfWords(longText);
countNumberOfEtInstances(longText);

// Bonus 2
const checkPhrase = (string) => {
    const preparedString = string.replaceAll(/[^a-z0-9]/gi,"").toLowerCase();
    let count=0;
    let isPalindrome;
    for (let i=0; i<preparedString.length; i++) {
        if (preparedString[i] === preparedString[preparedString.length-1-i]) {
            count++;
        } 
        isPalindrome = (count === preparedString.length) ? "This is a palindrome" : "This is not a palindrome"  
    } 
    return console.log(isPalindrome);
} 

const phraseToCheck = "Was it a car or a cat I saw?";
checkPhrase(phraseToCheck);

