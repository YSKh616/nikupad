$(function() {
  var oldMethod;
  var form_num;

  function cooking_methodEdit() {
    var html =  '<p id="str-count">あと'+
                '<span id="str-limit">60</span>'+
                '文字</p>'+
                '<form id="title-edit">'+
                '<textarea name="cooking_method[body]" class="cooking_method-form"></textarea>'+
                '<button id="cooking_method-edit-button" class="edit-button" type="submit">保存</button>'+
                '<span id="cancel"> 取消'+
               '</form>';
    return html;
  }

  function methodDisplay(data) {
    var html =  '<span id="recipe-method-text">'+
                data.body+
                '</span>';
    return html;
  }


  $(".method").on("click", ".recipe-method, #recipe-method-text", function(){
    oldMethod = $(this).prop('outerHTML');
    form_num = $(this).parents(".method").siblings(".header").children('.num').text();
    var cooking_method = cooking_methodEdit();
    $(this).parent().append(cooking_method);
    $(this).remove();


    var countMax = 60;
    $('.cooking_method-form').bind('keydown keyup keypress change',function(){
      var thisValueLength = $(this).val().length;
      var countDown = (countMax)-(thisValueLength);
      $('#str-limit').html(countDown);
    });

    $("#cancel").on("click", function(){
      $(this).parents(".method").append(oldMethod);
      $("#str-count").remove();
      $("#str-limit").remove();
      $("#title-edit").remove();
    });

    $('#cooking_method-edit-button').on("click", function(e) {
      e.preventDefault();
      var form = $('.cooking_method-form').val();
      var url = location.href + "/method";
      $.ajax({
        type: 'PATCH',
        url: url,
        data: {body: form, num: form_num},
        dataType: 'json',
      })
      .done(function(data){
        var html = methodDisplay(data);
        $('#cooking_method-edit-button').parents(".method").append(html);
        $('#str-count').remove();
        $('#str-limit').remove();
        $('#title-edit').remove();
      })
      .fail(function(){
        window.alert('作り方の投稿に失敗しました。');
      })
    });
  });

  $(".image").on("change", ".method-image-upload",function() {
    console.log(this);
    var fileprop = $(this).prop("files")[0];
    var filereader = new FileReader();
    // if(find_img.length){
    //   find_img.nextAll().remove();
    //   find_img.remove();
    // }
    var num = $(this).parent().parent().siblings(".header").children(".num").text();
    // console.log(aaa);

    var img = '<div class="img_view"><img alt="" class="img" width = "136px" height="107px"></div>';
    var location = $(this).parent().parent(".image");
    // console.log(location);
    $(this).parent().parent(".image").append(img);

    filereader.onload = function(e) {
      var loadedImageUri = e.target.result;
      var formData = new FormData($("#recipe-registration")[0]);
      var id = $(".id_number").attr("value");
      formData.append("num", num);
      $(location).find('span').remove();
      $(location).find('img').attr('src', loadedImageUri);
      // var url = location.href + "/method";
      var url2 = '/recipes/' + id + "/method";
      $.ajax({
        type: 'PATCH',
        url: url2,
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
      })
      .done(function(data){
      })
      .fail(function(){
        window.alert('aaaa。');
      })
    }
    filereader.readAsDataURL(fileprop);
  });
});
