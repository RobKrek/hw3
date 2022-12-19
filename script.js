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

//Aizliegtās ievades - nav smuki, bet strādā :)
document.getElementById('start').addEventListener('input', function(event){
  if (!/^[1-9]\d{0,1}$/.test(event.target.value)) {
    if (event.target.value < 1) {
      event.target.value = '';
    } else if (event.target.value > 99) {
      event.target.value = 99;}}
});
document.getElementById('end').addEventListener('input', function(event){
  if (!/^[1-9]\d*$/.test(event.target.value)) {
    event.target.value = '';
  } else if (event.target.value > 100) {
    event.target.value = 100;}
});
document.getElementById('fizz').addEventListener('input', function(event){
  if (!/^[1-9]\d*$/.test(event.target.value)) {
    event.target.value = '';}
});
document.getElementById('buzz').addEventListener('input', function(event){
  if (!/^[1-9]\d*$/.test(event.target.value)) {
    event.target.value = '';}
});
