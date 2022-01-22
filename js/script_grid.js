// Для меню бургер + GRID
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		// при клике на бургер хочу блоку бургер и меню добавить класс (toggle - нажал появился, нажал - убрался)
		$('.header__burger,.header__list').toggleClass('active');
		// Убираем прокрутку случайную при активном бургере
		$('body').toggleClass('lock');
	});
});