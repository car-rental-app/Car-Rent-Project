// Date picker

var datePickerFrom = $(".datepicker.from");
var datePickerTo = $(".datepicker.to");

datePickerFrom.datepicker({
	minDate: 0,
	dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	onSelect: function(date){
		datePickerTo.datepicker("option","minDate", date);
		var selectedDate = $(this).datepicker('getDate');
	}
}); 

datePickerTo.datepicker({
	minDate: 0,
	dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	onSelect: function(date){
		datePickerFrom.datepicker("option","maxDate", date);
		var selectedDate = $(this).datepicker('getDate');
	}
});


// Form validation

const inputs = Array.from(document.querySelectorAll('.lead_form input, .lead_form select'));
const btn = document.querySelector('.lead_form .button');

btn.addEventListener('click', function(e){
	inputs.forEach(function(i){
		if (i.value.trim() == ''){
			e.preventDefault();
			i.classList.add('error');
			i.addEventListener('click', function(){
				i.classList.remove('error');
			});
		}
	});
});

// validation form mail incontact

		function submitForm(form) {
			if(!validateEmail(form.email.value)) {
				
				var errorBlockEmail = document.getElementsByClassName('error-email')[0];
				errorBlockEmail.innerHTML = 'incorrect email';

				return false;
			}
		}
		function validateEmail(email) {
    		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
		}
