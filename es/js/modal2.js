
// Get modal element
var modal = document.getElementById('myModal2');
// Get open modal button
var modalBtn = document.getElementById('viewing_link');

//Turning of the link
modalBtn.addEventListener("click", function(e){
    e.preventDefault()
});
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}
// Function to close modal outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
