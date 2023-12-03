$(document).ready(function(){ 
    $(".search_form").on('click', function(){
      $(".search_form_modal").fadeIn();
    })
    $(".close_search_modal").on('click', function(){
      $(".search_form_modal").fadeOut();
    })
  })