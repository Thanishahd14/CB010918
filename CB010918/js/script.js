const header = document.querySelector("header");
const navimg = document.getElementById("logo-nav");

window.addEventListener ("scroll", function() {
	if (navimg){
		header.classList.toggle ("sticky", window.scrollY > 0);
		if (window.scrollY > 0){
			navimg.src = ('./img/ceylon-tea-new.png');
		}else{
			navimg.src = ('./img/ceylon-tea-new-light.png');
		}
	}
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};