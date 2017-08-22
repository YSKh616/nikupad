$(function() {
  var oldBackground;
  var formFlag = 0;
  function backgroundEdit() {
    var html =  '<p id="str-count">あと'+
                '<span id="str-limit">120</span>'+
                '文字</p>'+
                '<form id="title-edit">'+
                '<textarea name="recipe[background]" class="background-form"></textarea>'+
                '<button id="background-edit-button" type="submit">保存</button>'+
                '<span id="cancel"> 取消'+
               '</form>';
    return html;
  }

  function backgroundDisplay(data) {
    var html =  '<div class="recipe-background" title="add">'+
                data.background+
                '</div>';
    return html;
  }


  $('.recipe-background').hover(
    function(){
      if (formFlag == 0) {
        $(".recipe-background").css('background-color', '#ffff99');
        //マウスオーバー処理
      } else {
        $(".recipe-background").css('background-color', 'white');
      }
    },
    function(){
      $(".recipe-background").css('background-color', 'white');
        //マウスアウト処理
    }
  );

  $("#background").on("click", ".recipe-background", function(){
    oldBackground = $("#background").children();
    var background = backgroundEdit();
    $(".recipe-background").remove();
    $("#background").append(background);
    // $(".background").css('height', '100px');
    $(".background").css('background-color', 'white');
    $(".recipe-main__memo").css("height", "220px");
    // $(".recipe-main").css("height", "880px");
    $(".background").css('height', '200px');
    // $(".recipe-main__memo").css("line-height", "10px;")
    formFlag = 1;

    var countMax = 120;
    $('.background-form').bind('keydown keyup keypress change',function(){
      var thisValueLength = $(this).val().length;
      var countDown = (countMax)-(thisValueLength);
      $('#str-limit').html(countDown);
    });

    $("#cancel").on("click", function(){
      $("#str-count").remove();
      $("#str-limit").remove();
      $("#title-edit").remove();
      // $(".catch-copy").css('height', '44px');
      // $(".catch-copy:hover").css('background-color', '#ffff99');
      $("#background").append(oldBackground);
      $(".recipe-main__memo").css("height", "143px");
      // $(".recipe-main").css("height", "800px");
      formFlag = 0;
      $(".recipe-background").css('background-color', 'white');
      $(".background").css('height', '');
    });

    $('#background-edit-button').on("click", function(e) {
      e.preventDefault();
      var form = $('.background-form').val();
      console.log(form);
      $.ajax({
        type: 'PATCH',
        url: location.href,
        data: {background: form},
        dataType: 'json',
      })
      .done(function(data){
        // $('.title-form').val('');
        $('#str-count').remove();
        $('#str-limit').remove();
        $('#title-edit').remove();
        // console.log(data);
        var html = backgroundDisplay(data);
        $("#background").append(html);
      })
      .fail(function(){
        window.alert('aaaa');
      })
    });

  });
});
