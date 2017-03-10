$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});

	


	$('.top-nav a.nav-btn').click(function(){
		$(this).closest('.shell').find('ul').stop(true,true).slideToggle();
		console.log("top-nav valid script");
		$(this).find('span').toggleClass('active');
		return false;
	})
});

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".flexslider",
		slideshowSpeed: 3000,
		directionNav: false,
		controlNav: true,
		animationDuration: 900
	});
});