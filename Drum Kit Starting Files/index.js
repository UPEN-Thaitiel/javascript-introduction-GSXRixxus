// Selecciona todos los botones con la clase 'drum'
const buttons = document.querySelectorAll('.drum');

// Añade un event listener a cada botón
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

// Añade un event listener para los eventos de teclado
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Función para reproducir el sonido correspondiente
function makeSound(key) {
  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(key);
  }
}

// Función para animar el botón correspondiente
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (activeButton) {
    activeButton.classList.add('pressed');
    setTimeout(() => {
      activeButton.classList.remove('pressed');
    }, 100);
  }
}