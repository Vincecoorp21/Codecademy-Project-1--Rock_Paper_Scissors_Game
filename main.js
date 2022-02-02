// 1. Building the User's Choice

const getuserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Please, Introduce rock, paper or scissors');
  }
};

// 2. Building the Computer's Choice

const getComputerChoice = () => {
  const option = Math.floor(Math.random() * 3);

  // You can build the choices with IF/ELSE or SWITCH

  // if (option == '0') {
  //   return 'rock';
  // } else if (option == '1') {
  //   return 'paper';
  // } else if (option == '2') {
  //   return 'scissors';
  // }

  switch (option) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

// 3. Building the result of choices.

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Definitely you WIN';
  }

  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins';
    } else {
      return 'User wins';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins';
    } else {
      return 'User wins';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins';
    } else {
      return 'User wins';
    }
  }
};

const playGame = () => {
  const userChoice = getuserChoice('rock', 'paper', 'scissors');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
