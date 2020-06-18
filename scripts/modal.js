
function my240z(){
  let modal = document.getElementById('modal-240z');
  let close_modal = document.getElementsByClassName('modal-close')[0];

  modal.style.display = 'block';

  close_modal.onclick = function(){
    modal.style.display = 'none';
  }
}
