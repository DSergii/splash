$(window).load(function() {
	SplashApp.init();
});

var SplashApp = {

	init: function(){

		this.form = $( "#contact-form" );
		this.validRules = {
			rules: {
			    email: {
			      	required: true,
			      	email: true
			    }
			},

			messages: {
	            email: "Indirizzo Email Errato!"
	        }

		};
		this.validator = this.form.validate(this.validRules);
		this.formSubmit();
	},

	formSubmit: function() {
		var _this = this,
			submitBtn = _this.form.find('button'),
			form = _this.form,
			successText = 'Registrazione Avvenuta!';

		submitBtn.click(function() {

			if(form.valid()){

				$.ajax({
					type: "POST",
					url: 'newsletter.php',
					data: form.serialize(),
					success: function(data){
					  	_this.clearForm();
					  	form.addClass('success');
					  	form.find('input').attr("placeholder", successText);
					}
				});
			}
		});

	},
	clearForm: function() {
		$( "#contact-form" )[0].reset();
	},


}
