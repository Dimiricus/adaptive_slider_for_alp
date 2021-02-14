(function() {

	var one_slide = document.getElementById('one_wrap');
	var two_slide = document.getElementById('two_wrap');
	var three_slide = document.getElementById('three_wrap');

	var one_title = one_slide.getElementsByTagName('h3')[0];
	var two_title = two_slide.getElementsByTagName('h3')[0];
	var three_title = three_slide.getElementsByTagName('h3')[0];

	var one_ul = one_slide.getElementsByClassName('one_ul')[0];
	var two_ul = two_slide.getElementsByClassName('two_ul')[0];
	var three_ul = three_slide.getElementsByClassName('three_ul')[0];

	var one_sub = document.getElementById('one_sub');
	var two_sub = document.getElementById('two_sub');
	var three_sub = document.getElementById('three_sub');

/*--- ONE ---*/
	one_slide.addEventListener('mouseover', function(){
		this.classList.add('slide_width_up');
		two_slide.classList.add('slide_width_down');
		three_slide.classList.add('slide_width_down');

		one_title.classList.add('title_up');
		two_title.classList.remove('title_up');
		three_title.classList.remove('title_up');

		one_ul.classList.add('one_show');
		two_ul.classList.remove('two_show');
		three_ul.classList.remove('three_show');

		one_sub.classList.remove('title_top_left');
		two_sub.classList.add('title_top_left');
		three_sub.classList.add('title_top_left');

		one_title.classList.remove('main_title');
		two_title.classList.add('main_title');
		three_title.classList.add('main_title');
	});
	one_slide.addEventListener('mouseout', function() {
		this.classList.remove('slide_width_up');
		two_slide.classList.remove('slide_width_down');
		three_slide.classList.remove('slide_width_down');
		
		one_title.classList.remove('title_up');
		two_title.classList.remove('title_up');
		three_title.classList.remove('title_up');

		one_ul.classList.remove('one_show');
		two_ul.classList.remove('two_show');
		three_ul.classList.remove('three_show');

		one_sub.classList.remove('title_top_left');
		two_sub.classList.remove('title_top_left');
		three_sub.classList.remove('title_top_left');

		one_title.classList.remove('main_title');
		two_title.classList.remove('main_title');
		three_title.classList.remove('main_title');
	});
/*- END ONE -*/


/*--- TWO ---*/
	two_slide.addEventListener('mouseover', function(){
		this.classList.add('slide_width_up');
		one_slide.classList.add('slide_width_down');
		three_slide.classList.add('slide_width_down');

		one_title.classList.remove('title_up');
		two_title.classList.add('title_up');
		three_title.classList.remove('title_up');

		one_ul.classList.remove('one_show');
		two_ul.classList.add('two_show');
		three_ul.classList.remove('three_show');

		one_sub.classList.add('title_top_left');
		two_sub.classList.remove('title_top_left');
		three_sub.classList.add('title_top_left');

		one_title.classList.add('main_title');
		two_title.classList.remove('main_title');
		three_title.classList.add('main_title');
	});
	two_slide.addEventListener('mouseout', function() {
		this.classList.remove('slide_width_up');
		one_slide.classList.remove('slide_width_down');
		three_slide.classList.remove('slide_width_down');

		one_title.classList.remove('title_up');
		two_title.classList.remove('title_up');
		three_title.classList.remove('title_up');

		one_ul.classList.remove('one_show');
		two_ul.classList.remove('two_show');
		three_ul.classList.remove('three_show');

		one_sub.classList.remove('title_top_left');
		two_sub.classList.remove('title_top_left');
		three_sub.classList.remove('title_top_left');

		one_title.classList.remove('main_title');
		two_title.classList.remove('main_title');
		three_title.classList.remove('main_title');
	});
/*- END TWO -*/	


/*--- THREE ---*/
	three_slide.addEventListener('mouseover', function(){
		this.classList.add('slide_width_up');
		one_slide.classList.add('slide_width_down');
		two_slide.classList.add('slide_width_down');

		one_title.classList.remove('title_up');
		two_title.classList.remove('title_up');
		three_title.classList.add('title_up');

		one_ul.classList.remove('one_show');
		two_ul.classList.remove('two_show');
		three_ul.classList.add('three_show');

		one_sub.classList.add('title_top_left');
		two_sub.classList.add('title_top_left');
		three_sub.classList.remove('title_top_left');

		one_title.classList.add('main_title');
		two_title.classList.add('main_title');
		three_title.classList.remove('main_title');
	});
	three_slide.addEventListener('mouseout', function() {
		this.classList.remove('slide_width_up');
		one_slide.classList.remove('slide_width_down');
		two_slide.classList.remove('slide_width_down');

		one_title.classList.remove('title_up');
		two_title.classList.remove('title_up');
		three_title.classList.remove('title_up');

		one_ul.classList.remove('one_show');
		two_ul.classList.remove('two_show');
		three_ul.classList.remove('three_show');

		one_sub.classList.remove('title_top_left');
		two_sub.classList.remove('title_top_left');
		three_sub.classList.remove('title_top_left');

		one_title.classList.remove('main_title');
		two_title.classList.remove('main_title');
		three_title.classList.remove('main_title');
	});
/*- END THREE -*/	


var h = document.createElement('h3');
h.textContent = "Сиз от падения";

})();