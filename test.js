const sumOfEvenValues = (array) => {
    return array.reduce((sum, num)=> num%2 === 0 ? sum + num : sum, 0);
}

console.log(sumOfEvenValues([2,4]));

// test