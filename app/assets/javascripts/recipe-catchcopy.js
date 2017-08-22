$(function() {
  var oldCatchcopy;
  var formFlag = 0;
  function catchcopyEdit() {
    var html =  '<p id="str-count">あと'+
                '<span id="str-limit">60</span>'+
                '文字</p>'+
                '<form id="title-edit">'+
                '<textarea name="recipe[catch_copy]" class="catchcopy-form"></textarea>'+
                '<button id="catchcopy-edit-button" class="edit-button" type="submit">保存</button>'+
                '<span id="cancel"> 取消'+
               '</form>';
    return html;
  }

  function catchcopyDisplay(data) {
    var html =  '<div id="recipe-catchcopy-text">'+
                data.catchcopy+
                '</div>';
    return html;
  }


  $('#catch-copy').hover(
    function(){
      if (formFlag == 0) {
        $(".catch-copy").css('background-color', '#ffff99');
        //マウスオーバー処理
      } else {
        $(".catch-copy").css('background-color', 'white');
      }
    },
    function(){
      $(".catch-copy").css('background-color', 'white');
        //マウスアウト処理
    }
  );

  $("#catch-copy").on("click", "#recipe-catchcopy", function(){
    oldCatchcopy = $("#recipe-catchcopy").prop('outerHTML');
    var catchcopy = catchcopyEdit();
    $("#recipe-catchcopy").remove();
    $("#catch-copy").append(catchcopy);
    $(".catch-copy").css('height', '100px');
    $(".catch-copy:hover").css('background-color', 'white');
    formFlag = 1;

    var countMax = 60;
    $('.catchcopy-form').bind('keydown keyup keypress change',function(){
      var thisValueLength = $(this).val().length;
      var countDown = (countMax)-(thisValueLength);
      $('#str-limit').html(countDown);
    });

    $("#cancel").on("click", function(){
      $("#str-count").remove();
      $("#str-limit").remove();
      $("#title-edit").remove();
      $(".catch-copy").css('height', '44px');
      $(".catch-copy:hover").css('background-color', '#ffff99');
      $("#catch-copy").append(oldCatchcopy);
      formFlag = 0;
      $(".catch-copy").css('background-color', 'white');
    });

    $('#catchcopy-edit-button').on("click", function(e) {
      e.preventDefault();
      var form = $('.catchcopy-form').val();
      $.ajax({
        type: 'PATCH',
        url: location.href,
        data: {catch_copy: form},
        dataType: 'json',
      })
      .done(function(data){
        // $('.title-form').val('');
        $('#str-count').remove();
        $('#str-limit').remove();
        $('#title-edit').remove();
        // console.log(data);
        var html = catchcopyDisplay(data);
        $("#catch-copy").append(html);
      })
      .fail(function(){
        window.alert('aaaa');
      })
    });
  });

  $("#catch-copy").on("click", "#recipe-catchcopy-text", function(){
    oldCatchcopy = $("#recipe-catchcopy-text").prop('outerHTML');
    var catchcopy = catchcopyEdit();
    $("#recipe-catchcopy-text").remove();
    $("#recipe-catchcopy-text").remove();
    $("#catch-copy").append(catchcopy);
    $(".catch-copy").css('height', '100px');
    $(".catch-copy:hover").css('background-color', 'white');
    formFlag = 1;

    var countMax = 60;
    $('.catchcopy-form').bind('keydown keyup keypress change',function(){
      var thisValueLength = $(this).val().length;
      var countDown = (countMax)-(thisValueLength);
      $('#str-limit').html(countDown);
    });

    $("#cancel").on("click", function(){
      $("#str-count").remove();
      $("#str-limit").remove();
      $("#title-edit").remove();
      $(".catch-copy").css('height', '44px');
      $(".catch-copy:hover").css('background-color', '#ffff99');
      $("#catch-copy").append(oldCatchcopy);
      formFlag = 0;
      $(".catch-copy").css('background-color', 'white');
    });

    $('#catchcopy-edit-button').on("click", function(e) {
      e.preventDefault();
      var form = $('.catchcopy-form').val();
      $.ajax({
        type: 'PATCH',
        url: location.href,
        data: {catch_copy: form},
        dataType: 'json',
      })
      .done(function(data){
        // $('.title-form').val('');
        $('#str-count').remove();
        $('#str-limit').remove();
        $('#title-edit').remove();
        // console.log(data);
        var html = catchcopyDisplay(data);
        $("#catch-copy").append(html);
      })
      .fail(function(){
        window.alert('aaaa');
      })
    });
  });


});
