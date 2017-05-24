
var menuDesplegable = document.querySelector('.js-button-menu');
var menuDesplegableHiden = document.querySelector('.desplegable');

function showMenu(){
  menuDesplegableHidden.classList.toggle('hidden');
}

menuDesplegable.addEventListener('click', showMenu);
