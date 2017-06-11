(function(global) {
	// 헤더 고정
	var navFix = function() {
		'use strict';
		var head = document.querySelector('.header');
		global.addEventListener('scroll', function() {
			(this.scrollY > 0) ? head.classList.add('active') : head.classList.remove('active');
		});
	};
	navFix();

	// carousel
	
})(window);	