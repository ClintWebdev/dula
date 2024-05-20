let displayWinner = document.getElementById("result");
let userScore = document.getElementById("user");
let comScore = document.getElementById("computer");
let choices = ['bato', 'papel', 'gunting'];
let userSc = 0;
let compSc = 0;

async function getUserChoiceValue(userChoice) {
    if (userChoice === 'bato') {
        return 1;
    } else if (userChoice === 'papel') {
        return 2;
    } else if (userChoice === 'gunting') {
        return 3;
    }
}

async function getComputerChoiceValue(computerChoice) {
    if (computerChoice === 'bato') {
        return 1;
    } else if (computerChoice === 'papel') {
        return 2;
    } else if (computerChoice === 'gunting') {
        return 3;
    }
}

async function choice(userChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let userChoose = await getUserChoiceValue(userChoice);
    let compChoose = await getComputerChoiceValue(computerChoice);

    document.querySelector('.handOne img').src = `images/L${userChoose}.png`;
    document.querySelector('.handTwo img').src = `images/R${compChoose}.png`;

    let result = determineWinner(userChoice, computerChoice);

    if (result === 'user') {
        userSc++;
        displayWinner.textContent = `Daog Nice One!`;
    } else if (result === 'computer') {
        compSc++;
        displayWinner.textContent = `Pilde Bulok`;
    } else {
        displayWinner.textContent = `Tabla (${userChoice} og ${computerChoice})`;
    }

    userScore.textContent = userSc;
    comScore.textContent = compSc;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'tie';
    }

    if ((user === 'bato' && computer === 'gunting') || 
        (user === 'papel' && computer === 'bato') || 
        (user === 'gunting' && computer === 'papel')) {
        return 'user';
    } else {
        return 'computer';
    }
}
