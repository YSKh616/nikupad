$(function() {
  function modalResize(){
      var w = $(window).width();
      var h = $(window).height();
      var cw = $("#login").outerWidth();
      var ch = $("#login").outerHeight();
    //取得した値をcssに追加する
      $("#login").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
      });
  }

  $(".header__right--menulist--login").click(function(){
    console.log("aaaaaaaaaa");
    $("#login").fadeIn(100);

    $(".contents").click(function(){
      $("#login").fadeOut();
    });
    modalResize();
  });

  $(".header__right--menulist--setting").click(function(){
    console.log("bbbbbbbbb");
    $("#setting").fadeIn(100);

    $(".covered").click(function(){
      $("#setting").fadeOut();
    });
  });

});