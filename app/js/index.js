var openButton = document.querySelector('.open_button');
var hiddenMenu = document.querySelector('.menu');
var container = document.querySelector('.container');
var dimmed = document.querySelector('.dimm');

// Navbar animation 

openButton.addEventListener('click', function(){
	hiddenMenu.classList.toggle('hidden');
	dimmed.classList.toggle('dimmed');
});