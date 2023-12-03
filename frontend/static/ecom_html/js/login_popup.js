$(document).ready(function(){
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye-slash fa-eye");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

    // login popup 
  $(".login_popup_show").on("click", function(){
    $(".login_popup").fadeIn();
  })
  $(".close_login").on("click", function(){
    
    $(".login_popup").fadeOut();
  })
})