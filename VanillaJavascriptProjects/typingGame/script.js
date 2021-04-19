const word = document.querySelector('#word');
const text = document.querySelector('#text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endgameEl = document.querySelector('#end-game-container');
const settingsBtn = document.querySelector('#settings-btn');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const difficultySelect = document.querySelector('#difficulty');

//list for words
const words = [
  'shoshone',
  'exsiccative',
  ' chapel',
  'pontificating',
  'decisively',
  'congregativeness',
  ' obeliscal',
  'nonguidance',
  'stagecraft',
  'cave',
  'nontraction',
  'transelementated',
  'inferential',
  'economically',
  'unheeled',
  'disrobed',
  'noncataclysmal',
  ' spadelike',
  'semester',
  'euhemerus',
];

let randomWord;
//init score
let score = 0;

//init time;
let time = 10;
//focus on text on start
text.focus();

//set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

//set difficulty value

difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

//game over show endscreen

function gameOver() {
  endgameEl.innerHTML = `
  
    <h1>Time Ran Out</h1>
    <p>Your Final Score is ${score}</p>
    <button onclick="window.location.reload()">Reload</button>
  
  `;
  endgameEl.style.display = 'flex';
}

//generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add word to dom
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDom();

//eventlisteners

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();
    //clear
    e.target.value = '';
    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }
    updateTime();
  }
});
// settings button click

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
});

settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
