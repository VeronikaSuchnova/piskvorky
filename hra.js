let currentPlayer = 'circle';
const signOfPlayer = document.querySelector('.menu_circle');

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
};

const cellElm = document.querySelectorAll('.cell');
cellElm.forEach((square) => {
  square.addEventListener('click', played);
});
