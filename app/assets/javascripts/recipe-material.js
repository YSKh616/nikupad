$(function() {
  function modalResize(){
      var w = $(window).width();
      var h = $(window).height();
      var cw = $("#material-setting").outerWidth();
      var ch = $("#material-setting").outerHeight();
    //取得した値をcssに追加する
      $("#material-setting").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
      });
  }

  function materialAdd() {
    var html =  '<li class="one-material">'+
                '<img src="/assets/up_down.png", class="up_down", width="24", height="24"></img>'+
                '<form>'+
                '<input type="text", name="text", class="material_form">'+
                '<input type="text", name="text", class="quantity_form">'+
                '</form>'+
                '<img src="/assets/batsu_off.png", class="batsu", width="19", height="19"></img>'+
                '</li>';
    return html;
  }

  $(".recipe-main__top--right--catch-copy").on("click", "#material", function(){
    modalResize();
    $("#material-setting").fadeIn(100);
  });

  $(".example").click(function(){
    $("#material-setting").fadeOut();
  });


  $('.all-material').sortable({
    handle: '.up_down',
  });

  $(".add-line").on("click", ".add-line-button", function(){
    var material = materialAdd();
    $(".all-material").append(material);
  });

  $(document).on("click", ".batsu", function(){
    console.log("mmmmmm");
    $(this).parent().remove();
  });

  $(document).on("mouseover", ".batsu", function(){
    // $(this).removeAttr('src');
    $(this).attr('src', '/assets/batsu_on.png');
  });

  $(document).on("mouseout", ".batsu", function(){
    $(this).attr('src', '/assets/batsu_off.png');
  });

});
