$(function() {
  var oldPoint;
  var formFlag = 0;
  function catchcopyEdit() {
    var html =  '<p id="str-count">あと'+
                '<span id="str-limit">120</span>'+
                '文字</p>'+
                '<form id="title-edit">'+
                '<textarea name="recipe[point]" class="point-form"></textarea>'+
                '<button id="point-edit-button" type="submit">保存</button>'+
                '<span id="cancel"> 取消'+
               '</form>';
    return html;
  }

  function pointDisplay(data) {
    var html =  '<div id="recipe-point" title="add">'+
                data.point+
                '</div>';
    return html;
  }


  $('#recipe-point').hover(
    function(){
      if (formFlag == 0) {
        $("#recipe-point").css('background-color', '#ffff99');
        //マウスオーバー処理
      } else {
        $("#recipe-point").css('background-color', 'white');
      }
    },
    function(){
      $("#recipe-point").css('background-color', 'white');
        //マウスアウト処理
    }
  );

  $("#point").on("click", "#recipe-point", function(){
    oldPoint = $("#recipe-point").prop('outerHTML');
    var point = catchcopyEdit();
    $("#recipe-point").remove();
    $("#point").append(point);
    $(".point").css('height', '100px');
    $(".point").css('background-color', 'white');
    $(".recipe-main__memo").css("height", "205px");
    $(".recipe-main").css("height", "860px");
    // $(".recipe-main__memo").css("line-height", "10px;")
    formFlag = 1;

    var countMax = 120;
    $('.point-form').bind('keydown keyup keypress change',function(){
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
      $("#point").append(oldPoint);
      $(".recipe-main__memo").css("height", "143px");
      $(".recipe-main").css("height", "800px");
      formFlag = 0;
      $("#recipe-point").css('background-color', 'white');
    });

    $('#point-edit-button').on("click", function(e) {
      e.preventDefault();
      var form = $('.point-form').val();
      console.log(form);
      $.ajax({
        type: 'PATCH',
        url: location.href,
        data: {point: form},
        dataType: 'json',
      })
      .done(function(data){
        // $('.title-form').val('');
        $('#str-count').remove();
        $('#str-limit').remove();
        $('#title-edit').remove();
        // console.log(data);
        var html = pointDisplay(data);
        $("#point").append(html);
      })
      .fail(function(){
        window.alert('aaaa');
      })
    });

  });
});
