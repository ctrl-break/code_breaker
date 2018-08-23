import {OutputFactory} from 'javascript-terminal';

export const startMessage = () => {
  return OutputFactory.makeTextOutput(`To break the code you need to pick up four different numbers.
    After entering the check command, enter four digits,
    the terminal will display how much you guessed.`);
}

export const empty = () => {
  return OutputFactory.makeTextOutput('');
}

export const noValidNumber = () => {
  return OutputFactory.makeTextOutput('Type a correct code (four different numbers). Example - check 1234 ');
}

export const input = (input) => {
  return OutputFactory.makeTextOutput(input);
}
