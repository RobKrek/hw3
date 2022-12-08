// Div'u ģenerātors
function generateDivs(start, end, fizz, buzz) {
  for (let i = start; i <= end; i++) {
    
    let div = document.createElement('div');
    div.id = `myid${i}`;

    // Div'u klases priekš CSS
    if (i % fizz === 0 && i % buzz === 0) {
      div.classList.add('fizzbuzz');
      div.innerText = 'FizzBuzz';
    } else if (i % fizz === 0) {
      div.classList.add('fizz');
      div.innerText = 'Fizz';
    } else if (i % buzz === 0) {
      div.classList.add('buzz');
      div.innerText = 'Buzz';
    } else {
      div.classList.add('normal');
      div.innerText = i;
    }

    document.getElementById('main').appendChild(div);
  }
}

// Nodzēst div'us
function clearDivs() {
  let main = document.getElementById('main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}


