// Date picker

var datePicker = $(".datepicker") || null;

if (datePicker){
	datePicker.datepicker(); 
}

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

