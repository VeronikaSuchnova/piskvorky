let currentPlayer = 'circle';
const signOfPlayer = document.querySelector('.menu_circle');

const played = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.toggle('board__field--circle');
    currentPlayer = 'cross';
    signOfPlayer.src = 'ikonky/circle.svg';
    event.target.disabled = true;
  } else {
    event.target.classList.toggle('board__field--cross');
    currentPlayer = 'circle';
    signOfPlayer.src = 'ikonky/cross.svg';
    event.target.disabled = true;
  }
};

const cell1Elm = document.querySelector('.cell:nth-child(1)');
cell1Elm.addEventListener('click', played);

const cell2Elm = document.querySelector('.cell:nth-child(2)');
cell2Elm.addEventListener('click', played);

const cell3Elm = document.querySelector('.cell:nth-child(3)');
cell3Elm.addEventListener('click', played);

const cell4Elm = document.querySelector('.cell:nth-child(4)');
cell4Elm.addEventListener('click', played);

const cell5Elm = document.querySelector('.cell:nth-child(5)');
cell5Elm.addEventListener('click', played);

const cell6Elm = document.querySelector('.cell:nth-child(6)');
cell6Elm.addEventListener('click', played);

const cell7Elm = document.querySelector('.cell:nth-child(7)');
cell7Elm.addEventListener('click', played);

const cell8Elm = document.querySelector('.cell:nth-child(8)');
cell8Elm.addEventListener('click', played);

const cell9Elm = document.querySelector('.cell:nth-child(9)');
cell9Elm.addEventListener('click', played);

const cell10Elm = document.querySelector('.cell:nth-child(10)');
cell10Elm.addEventListener('click', played);
