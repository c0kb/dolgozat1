//1. feladat - leap year
function isLeapYear() {
    const year = parseInt(document.getElementById('year').value);

    let isLeap = false;
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeap = true;
    }

    if (isLeap) {
        document.getElementById('result').innerHTML = `${year} is a leap year.`;
    } else {
        document.getElementById('result').innerHTML = `${year} is not a leap year.`;
    }
}
//2. feladat - cuboid
function cuboid() {
    const length = 10.4;
    const width = 13.5;
    const height = 8.2;

    const surfaceArea = 2 * (length * width + width * height + height * length);

    const volume = length * width * height;

    document.getElementById('surfaceArea').innerHTML = `Surface Area: ${surfaceArea.toFixed(2)}`;
    document.getElementById('volume').innerHTML = `Volume: ${volume.toFixed(2)}`;
}
//3. feladat - stone paper scissors
function stonePaperScissors() {
    const player1 = parseInt(document.getElementById('player1').value);
    const player2 = parseInt(document.getElementById('player2').value);
    let output;

    if (player1 < 1 || player1 > 3 || player2 < 1 || player2 > 3) {
        output = "Please enter a valid number (1, 2, or 3) for both players.";
    } else if (player1 === player2) {
        output = "The game is a tie.";
    } else if (
        (player1 === 1 && player2 === 3) ||
        (player1 === 2 && player2 === 1) ||
        (player1 === 3 && player2 === 2)
    ) {
        output = "The first player wins.";
    } else {
        output = "The second player wins.";
    }

    document.getElementById('output').innerHTML = output;
}
//4. feladat - factorial
function factorial(number) {
    const stringNumber = number.toString;
    const factorial = 1;

    for (const i = 0; i < number.length; i++) {
        const intnumber = number[i];
        factorial = factorial*intnumber;
    }
    
    return factorial;
}