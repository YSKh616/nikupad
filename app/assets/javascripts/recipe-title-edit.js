$(function() {
  var oldTitle;
  function titleEdit() {
    var html =  '<p id="str-count">あと'+
                '<span id="str-limit">20</span>'+
                '文字</p>'+
                '<form id="title-edit">'+
                '<input name="value" class="title-form">'+
                '<button class="edit-button" type="submit">保存</button>'+
                '<span id="cancel"> 取消'+
               '</form>';
    return html;
  }

  function editCss() {
    $("#recipe-title").css('line-height', '12px');
    $("#recipe-title").css('padding-left', '0px');
    $("#recipe-title").css('padding-bottom', '5px');
  }

  function returnCss() {
    $("#recipe-title").css('line-height', '32px');
    $("#recipe-title").css('padding-left', '5px');
    $("#recipe-title").css('padding-bottom', '');
  }

  $("#recipe-title").on("click", "#recipe-title-form", function(){
    oldTitle = $("#recipe-title-form").prop('outerHTML');
    var title = titleEdit();
    editCss();
    $("#recipe-title-form").remove();
    $("#recipe-title").append(title);

    // 文字数カウント
    var countMax = 20;
    $('.title-form').bind('keydown keyup keypress change',function(){
      var thisValueLength = $(this).val().length;
      var countDown = (countMax)-(thisValueLength);
      $('#str-limit').html(countDown);
    });

    // 取消を押したとき
    $("#cancel").on("click", function(){
      console.log("aaaaaa");
      $("#str-count").remove();
      $("#str-limit").remove();
      $("#title-edit").remove();
      $("#recipe-title").append(oldTitle);
      returnCss();
    });
  });

});