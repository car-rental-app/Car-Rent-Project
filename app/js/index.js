const openButton = document.querySelector('.open_button');
const hiddenMenu = document.querySelector('.menu');
const container = document.querySelector('.container');
const dimmed = document.querySelector('.dimm');
const fixedMenu = document.querySelector('.fixed_menu') || null;

// Navbar animation 

openButton.addEventListener('click', function(){
	hiddenMenu.classList.toggle('hidden');
	dimmed.classList.toggle('dimmed');
});

if (fixedMenu){
	document.addEventListener('scroll', function(){
		var scroll = window.pageYOffset;
		if (scroll > 570 && window.innerWidth > 780){
			fixedMenu.classList.remove('hidden_top');
		} else if (scroll < 80 && window.innerWidth > 780){
			fixedMenu.classList.add('hidden_top');
		}
	});
}

