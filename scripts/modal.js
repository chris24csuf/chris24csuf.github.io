
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
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
