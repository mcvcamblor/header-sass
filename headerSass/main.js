
var menuDesplegable = document.querySelector('.js-btn-menu');
var menuDesplegableHidden = document.querySelector('.nav-small');

function showMenu(){
  menuDesplegableHidden.classList.toggle('hidden');
}

menuDesplegable.addEventListener('click', showMenu);
