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
	            email: "Please enter a valid email address"
	        }

		};
		this.validator = this.form.validate(this.validRules);
		this.formSubmit();
	},

	formSubmit: function() {
		var _this = this,
			submitBtn = _this.form.find('button');

		submitBtn.click(function() {

			if(_this.form.valid()){

				$.ajax({
					type: "POST",
					url: 'newsletter.php',
					data: _this.form.serialize(),
					success: function(data){
					  	console.log( data );
					  	_this.clearForm();
					}
				});
			}
		});

	},
	clearForm: function() {
		$( "#contact-form" )[0].reset();
	},


}
