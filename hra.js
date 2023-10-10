import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const signOfPlayer = document.querySelector('.menu_circle');
const cellElm = document.querySelectorAll('.cell');

// change of the signs of the players on the playing field - cross/circle
const played = (click) => {
  if (currentPlayer === 'circle') {
    click.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    signOfPlayer.src = 'ikonky/cross.svg';
  } else {
    click.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    signOfPlayer.src = 'ikonky/circle.svg';
  }
  click.target.disabled = true;

  // finding out the winner using function "findWinner"
  const playingField = Array.from(cellElm).map((square) => {
    if (square.classList.contains('board__field--circle')) {
      return 'o';
    } else if (square.classList.contains('board__field--cross')) {
      return 'x';
    }
    return '_';
  });
  // console.log(playingField);
  const winner = findWinner(playingField);
  if (winner === 'o' || winner === 'x') {
    alert(`⭕️❌ Vyhrál hráč se symbolem "${winner}", gratulka❣️🎊`);
    location.reload();
  }
};

// Adding of eventListener on "click" for all squares on the playing field
cellElm.forEach((square) => {
  square.addEventListener('click', played);
});
