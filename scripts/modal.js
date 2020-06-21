
let vh = window.innerHeight;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function open_modal(name){
  let modal = document.getElementById(name);
  let close_modal = document.querySelector('#' + name + '.modal span.modal-close');

  modal.style.display = 'block';

  close_modal.onclick = function(){
    modal.style.display = 'none';
  }
}
