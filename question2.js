
let inputNumber = parseInt(prompt("Enter a number between 1-10"));

function numberOneTriangle(inputNumber) {
    if (inputNumber < 11 && inputNumber > 0) {
        for (let i = 1; i <= inputNumber; i++) {
                document.write('<br/>');
            for(let j = 1; j <= i; j++) {
                document.write('*');
            }
        }
    } else {
        alert("Please enter a number from 1-10");
    }
}

numberOneTriangle(inputNumber);