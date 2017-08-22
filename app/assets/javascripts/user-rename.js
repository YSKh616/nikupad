$(function() {
  var countMax = 10;
  $('.name_form').bind('keydown keyup keypress change',function(){
    var thisValueLength = $(this).val().length;
    var countDown = (countMax)-(thisValueLength);
    $('.user-name-limit').html(countDown);
    if (countDown < 0) {
      $(".change-name-button").prop("disabled", true);
      $(".change-name-button").css("background", "");
      $(".change-name-button").css("background-color", "#ececec");
      $(".change-name-button").css("color", "#999999");
    } else if (countDown == 10){
      $(".change-name-button").prop("disabled", true);
      $(".change-name-button").css("background", "");
      $(".change-name-button").css("background-color", "#ececec");
      $(".change-name-button").css("color", "#999999");
    } else if (countDown != 10) {
      $(".change-name-button").prop("disabled", false);
      $(".change-name-button").css("background", "linear-gradient(to bottom, #f7f7f7, #e4e4e4)");
      $(".change-name-button").css("background-color", "");
      $(".change-name-button").css("color", "#3c3c3c");
    }
  });
});
