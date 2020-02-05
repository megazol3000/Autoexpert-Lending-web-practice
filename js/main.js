var oldScrollY = 0;
var navbar = document.querySelector('.header .navbar');

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	var dY = scrolled - oldScrollY;
  
	if ( dY > 0 ){
  	navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
	oldScrollY = scrolled;
}

let burgerBtn = document.getElementById('bur-button');
	burgerBtn.onclick = function() {
		navbar.classList.toggle('navbar--active');
	}

var mainButton = document.querySelectorAll('.click-btn');
var mainForm = document.getElementById('main-form');
var darkGlass = document.getElementById('glass');
	
	for (var i = 0; i < mainButton.length; i++) {
  		mainButton[i].addEventListener('click', function() {
 		mainForm.classList.add('form-active');
 		darkGlass.classList.add('glass-active');
  		});
	}
	
	darkGlass.onclick = function() {
		mainForm.classList.remove('form-active');
 		darkGlass.classList.remove('glass-active');
	}

let cards = document.querySelectorAll('.solutions .solutions-container .slider .slider-content .slider-card');
let points = document.querySelectorAll('.solutions .solutions-container .pagination .pag-point');
let current = 0;

function slider(){
	for(let i = 0; i < cards.length; i++) {
	cards[i].classList.add('slider-card-opacity');
	points[i].classList.add('pg--active');
	}
	cards[current].classList.remove('slider-card-opacity');
	points[current].classList.remove('pg--active');
}
slider();

document.querySelector('.solutions .solutions-container .slider .left-arr').onclick = function(){
	if (current-1 == -1){
	current = cards.length - 1;
	} else { 
	current--; 
	} 
	slider();
};
document.querySelector('.solutions .solutions-container .slider .right-arr').onclick = function(){
	if (current+1 == cards.length){
	current = 0;
	} else { 
	current++; 
	} 
	slider();
};

let point1 = document.getElementById('pg1');
let point2 = document.getElementById('pg2');
let point3 = document.getElementById('pg3');
let card1 = document.getElementById('sl-card1');
let card2 = document.getElementById('sl-card2');
let card3 = document.getElementById('sl-card3');

point1.onclick = function(){
	card1.classList.remove('slider-card-opacity');
	card2.classList.add('slider-card-opacity');
	card3.classList.add('slider-card-opacity');

	point1.classList.remove('pg--active');
	point2.classList.add('pg--active');
	point3.classList.add('pg--active');
}
point2.onclick = function(){
	card1.classList.add('slider-card-opacity');
	card2.classList.remove('slider-card-opacity');
	card3.classList.add('slider-card-opacity');
	
	point1.classList.add('pg--active');
	point2.classList.remove('pg--active');
	point3.classList.add('pg--active');
}
point3.onclick = function(){
	card1.classList.add('slider-card-opacity');
	card2.classList.add('slider-card-opacity');
	card3.classList.remove('slider-card-opacity');

	point1.classList.add('pg--active');
	point2.classList.add('pg--active');
	point3.classList.remove('pg--active');
}

var navLinks = document.querySelectorAll(".header .navbar .navbar-container .navbar-menu ul .nav-link");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function(){
    navbar.classList.remove('navbar--active');
  };
}