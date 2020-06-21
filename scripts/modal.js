

document.addEventListener("DOMContentLoaded", function(event) {
  let vh = window.innerHeight;
  let t = document.getElementById('test');

  t.innerHTML = vh;
});

function open_modal(name){
  let modal = document.getElementById(name);
  let close_modal = document.querySelector('#' + name + '.modal span.modal-close');

  modal.style.display = 'block';

  close_modal.onclick = function(){
    modal.style.display = 'none';
  }
}
