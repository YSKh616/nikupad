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
                '<img src="/images/up_down.png", class="up_down", width="24", height="24"></img>'+
                '<form>'+
                '<input type="text", name="text", class="material_form">'+
                '<input type="text", name="text", class="quantity_form">'+
                '</form>'+
                '<img src="/images/batsu_off.png", class="batsu", width="19", height="19"></img>'+
                '</li>';
    return html;
  }

  function materialViewHeader() {
    var html =  '<div class="material" id="material">'+
                '<div class="material-header">材料</div>'+
                '</div>';
    return html;
  }
  function materialViewBody(n, q) {
    var html =  '<div class="material-one">'+
                '<div class="material-left">'+
                n[1].name+
                '</div>'+
                '<div class="material-right">'+
                q[1].quantity+
                '</div>'+
                '</div>';
    return html;
  }


  $(".recipe-main__top--right--catch-copy").on("click", "#material", function(){
    modalResize();
    $("#material-setting").fadeIn(100);
    $("#save-material").on("click", function(e) {
      e.preventDefault();
      var people = $('input[name="material[recipes][people]"]').serializeArray();
      var name = $('input[name="material[materials][][name]"]').serializeArray();
      var quantity = $('input[name="material[materials][][quantity]"]').serializeArray();
      // console.log(people);
      // console.log(name);
      // console.log(quantity);
      var material = [people, name, quantity];
      $.ajax({
        type: 'POST',
        url: location.href,
        data: {material: material},
        dataType: 'json',
      })
      .done(function(json){
        $('#material').remove();

        var html = materialViewHeader();
        $(".recipe-main__top--right--catch-copy").append(html);
        html = "";
        for (var i = 0; i < json.names.length; i++) {
          html += materialViewBody(json.names[i], json.quantities[i]);
        }
        console.log(json.names.length)
        // json.names.forEach(function(m) {
        //   html += materialViewBody(m);
        // });
        $(".material").append(html);
        $("#material-setting").fadeOut();
      })
      .fail(function(){
        window.alert('aaaa');
      })
    })
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
    $(this).attr('src', '/images/batsu_on.png');
  });

  $(document).on("mouseout", ".batsu", function(){
    $(this).attr('src', '/images/batsu_off.png');
  });

});
