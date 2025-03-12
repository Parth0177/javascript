# Projects Related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/vitejs-vite-ab6lsbmy?file=index.html,1-colorChanger%2Fscript.js,1-colorChanger%2Findex.html&terminal=dev)

# Solution Code

## Project 1 Solution

```javascript

console.log("Path")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid height';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



```

## Prroject 3 Solution

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NumGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a Number less than 100');
  } else {
    prevGuess.push(guess);
    if (NumGuess === 11) {
      displayguess(guess);
      displayMessage(`Game Over.Random Number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endgame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too Low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too High');
  }
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  NumGuess++;
  remaining.innerHTML = `${11 - NumGuess}`;
}
function newGame() {
  const new_game = document.querySelector('#newGame');
  new_game.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - NumGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start NEW Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

```

## Project 5 Soln

```javascript

// generate random color

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
let intervalId;

const startChangingColor = () => {
  intervalId = setInterval(changebgcolor, 1000);
  function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId=null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);


```

## Project 6 Soln

```javascript
const insert= document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})
```
