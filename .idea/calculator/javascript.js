let a = '';
let b = '';
let operator = '';
let currentInp = '';
let isOperatorClicked = false;
const butns = document.querySelectorAll('button');
const rezulatat = document.getElementById('result');

butns.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;


    if (!isNaN(value)) {
      currentInp += value;
      rezulatat.textContent = currentInp;
    }


    if (value === '+' || value === '-' || value === '*' || value === '/') {
      a = currentInp;
      operator = value;
      currentInp = '';
      isOperatorClicked = true;
    }


    if (value === '=' && isOperatorClicked) {
      b = currentInp;
      let result;


      if (operator === '+') result = parseFloat(a) + parseFloat(b);
      if (operator === '-') result = parseFloat(a) - parseFloat(b);
      if (operator === '*') result = parseFloat(a) * parseFloat(b);
      if (operator === '/') result = parseFloat(a) / parseFloat(b);

      rezulatat.textContent = result;
      currentInp = '';
      isOperatorClicked = false;
    }

    if (value === 'C') {
      a = '';
      b = '';
      operator = '';
      currentInp = '';
      rezulatat.textContent = '0';
      isOperatorClicked = false;
    }
  });
});
