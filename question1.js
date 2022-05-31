function printPrimeNumber () {
    let firstNum = parseInt(document.getElementById('firstNumber').value);
    let secondNum = parseInt(document.getElementById('secondNumber').value);
    if (firstNum - secondNum >= 0) {
        let higherNum = firstNum;
        let lowerNum = secondNum;
    } else {
        let higherNum = secondNum;
        let lowerNum = firstNum;
    }

    for (let i = lowerNumber; i <= higherNumber; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (i > 1 && isPrime) {
            console.log(i + ", ");
        }
    }
    console.log("Are the prime numbers between " + lowerNum + " and " + higherNum);

}