let a;
const result = document.getElementById('result');
const btn = document.getElementById('btn');
const input = document.getElementById('number');
let attemps = 10;
let randomNumb = Math.floor(Math.random() * 100) + 1;




btn.addEventListener('click', () =>{
    if(attemps > 0){
    a = parseInt(input.value);

    if(a > randomNumb){
      result.textContent = 'Too high! Try again!';
     }else  if(a < randomNumb){
      result.textContent = 'Too low! Try again.';
     }else {
     result.textContent = 'Congratulations! You guessed the number.';
     }

attemps--;

if(attemps <= 0){
    result.textContent = 'You have reached the limit!! ';
    let playAgain = window.confirm('Do you want to play again!')

    if(playAgain){
     randomNumb = Math.floor(Math.random() * 100) + 1;
     attemps = 10;
     result.textContent = "New Game";
     input.value = '';
      }
          }
      }
  });


