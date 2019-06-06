$('span.icon-menu:before, span.icon-menu, .nav__menu__content div, .menu-icon_toggle').on('click', function(){
	$('body').toggleClass('active-body')
	$('.hamburger_menu').toggleClass('active_menu')
	$('.menu-icon_toggle').toggleClass('icon-close')
	$('.menu-icon_toggle').toggleClass('icon-menu')
})
$('a[href^="#"]').click(function () { 
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$('body').animate( { scrollTop: destination }, 1100 );
	$('html').animate( { scrollTop: destination }, 1100 );

	return false;
});
