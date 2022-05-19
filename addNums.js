const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft > 0) {
        reader.question('Enter a number: ', function(input) {
            let parsed = parseInt(input);
            sum += Number(parsed);
            console.log(sum);
            let leftover = numsLeft - 1;
            addNumbers(sum, leftover, completionCallback);
        }) 
    }

    if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    }
} 

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));