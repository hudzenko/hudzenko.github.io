$(function(){

	var add = function(char){
		calc.input.value += char;
	};

	var calcRes = function(){
		calc.input.value = eval(calc.input.value);
	};

	var clear = function(){
		calc.input.value = '';
	};

	var del = function(){
		calc.input.value = calc.input.value.slice(0, -1);
	}

	var fact = function(n) {
    if (n >= 0)
        return (n != 1) ? n * fact(n - 1) : 1;
	}

	$('.buttons').click(function(e){
		var action = e.target.value;

		if(!action) return;

		if(action == 'x'){
			add('*');
			return;
		}

		if(action == 'c'){
			clear();
			return;
		}

		if(action == '='){
			calcRes();
			return;
		}

		add(action);
	});

	$(this).keydown(function (e) {
		if (e.keyCode == 27) clear();
		if (e.keyCode == 8) del();
		if (e.keyCode == 13) calcRes();
		if (e.keyCode == 111) add('/');
		if (e.keyCode == 106) add('*');
		if (e.keyCode == 109) add('-');
		if (e.keyCode == 107) add('+');
		if (e.keyCode == 96 || e.keyCode == 48) add('0');
		if (e.keyCode == 97 || e.keyCode == 49) add('1');
		if (e.keyCode == 98 || e.keyCode == 50) add('2');
		if (e.keyCode == 99 || e.keyCode == 51) add('3');
		if (e.keyCode == 100 || e.keyCode == 52) add('4');
		if (e.keyCode == 101 || e.keyCode == 53) add('5');
		if (e.keyCode == 102 || e.keyCode == 54) add('6');
		if (e.keyCode == 103 || e.keyCode == 55) add('7');
		if (e.keyCode == 104 || e.keyCode == 56) add('8');
		if (e.keyCode == 105 || e.keyCode == 57) add('9');
		if (e.keyCode == 110 || e.keyCode == 190) add('.');

	});

	$('.ingener').click(function(e){
		e.preventDefault();

		var key = $(e.target).data('action');

		if(!key) return;

		switch (key) {
			case 'sin':
			calc.input.value = Math.sin(calc.input.value);
			break;
			case 'cos':
			calc.input.value = Math.cos(calc.input.value);
			break;
			case 'tg':
			calc.input.value = Math.tan(calc.input.value);
			break;
			case 'ctg':
			calc.input.value = 1/Math.tan(calc.input.value);
			break;
			case 'lg':
			calc.input.value = (Math.log(calc.input.value)) / (Math.log(10));
			break;
			case 'ln':
			calc.input.value = Math.log(calc.input.value);
			break;
			case 'sqr':
			calc.input.value = Math.pow(calc.input.value, 2);
			break;
			case 'fact':
			calc.input.value = fact(parseInt(calc.input.value));
			break;
		}
	});

	$('.switcher').click(function(e){
		e.preventDefault();

		var ingenBox = $('.ingener');

		if(ingenBox.hasClass('ingener_active')){
			$(this).text('Make ingeneer');
		}
		else{
			$(this).text('Make simple');
		}
		ingenBox.toggleClass('ingener_active');
	})
})







