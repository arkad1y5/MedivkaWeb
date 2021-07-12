function toggleMenu(){
	const menuDoggle = document.querySelector('.toggle');
	const nav_menu = document.querySelector('.nav_menu');
	menuDoggle.classList.toggle('active')
	nav_menu.classList.toggle('active')  //меню
}

//дивитись відео
function videoToggle(){
	const med_video = document.querySelector('.med_video');
	med_video.classList.toggle('active');
}