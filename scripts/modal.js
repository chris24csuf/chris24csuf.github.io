

document.addEventListener("DOMContentLoaded", function(event) {
  // let h = window.innerHeight;
  let h = window.innerHeight;

  document.documentElement.style.setProperty('--vh', `${h}px`);
});

function open_modal(name){
  let modal = document.getElementById(name);
  let close_modal = document.querySelector('#' + name + '.modal span.modal-close');

  modal.style.display = 'block';

  close_modal.onclick = function(){
    modal.style.display = 'none';
  }
}
