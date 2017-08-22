$(function() {
  $(".image-upload").on("change", function() {
    var fileprop = $(this).prop("files")[0],
        find_img = $(this).parent().find("img"),
        filereader = new FileReader(),
        view_box = $(this).parent('.recipe-main__top--image');
    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    var img = '<div class="img_view"><img alt="" class="img" width = "280px"></div>';
    $(".recipe-main__top--image").append(img);

    filereader.onload = function(e) {
      var loadedImageUri = e.target.result;
      var form = $('#recipe-registration').get()[0];
      var formData = new FormData($("#recipe-registration")[0]);
      $(".recipe-main__top--image").find('img').attr('src', loadedImageUri);
      $.ajax({
        type: 'PATCH',
        url: location.href,
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      })
      .done(function(data){
      })
      .fail(function(){
        window.alert('画像が読み込めません。');
      })
    }
    filereader.readAsDataURL(fileprop);
  });
});
