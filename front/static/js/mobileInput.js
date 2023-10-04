var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
});

// store the instance variable so we can access it in the console e.g. window.iti.getNumber()
window.iti = iti;

(function ($) {

 $('form').on('submit', function(e) {
   e.preventDefault();
   e.stopPropagation();

   let form = $(this).get(0);
   $('form').addClass('was-validated');

   //Need to display invalid feedback explicitly on submit for input fields due to plugin changing structure
   $('form .tel-input').each(function() {
       let telInput = $(this).get(0);
       if($(this).prop('required') && !telInput.checkValidity()) {
         $(this).parents('.form-group').find('.invalid-feedback').show();
       }
     });

   });
  
  input.addEventListener("countrychange", function() {
    let isValidNumber = iti.isValidNumber();
    checkPhoneValidation($(this), isValidNumber);
  });

  $('form').on('keyup', '.tel-input', function (event) {
    let isValidNumber = iti.isValidNumber();
    checkPhoneValidation($(this), isValidNumber);
  });
     
})(jQuery);  

function checkPhoneValidation(element, isValidNumber)
{

  let invFeedbackDiv = element.parents('.form-group').find('.invalid-feedback');
  input = element.get(0);

      if(isValidNumber) {
        //need to set this first as otherwise input validity is falsely linking to custom error
        input.setCustomValidity('');
    }
  
  if(isValidNumber && input.validity.valid) {
    input.setCustomValidity('');
    invFeedbackDiv.hide();
  } else {
    invFeedbackDiv.html('Invalid phone number');
    input.setCustomValidity('invalid');

    if($('form').hasClass('was-validated')) {
      invFeedbackDiv.show();
    }
  } 
  
}