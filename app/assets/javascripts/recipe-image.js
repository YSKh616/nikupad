$(function() {
  // $(".recipe-main__top--image").on("click", ".image-upload",function() {
    // loadImage("images/image.jpg");
    // return false;
  $(".image-upload").on("change", function() {
    var fileprop = $(this).prop("files")[0],
        find_img = $(this).parent().find("img"),
        filereader = new FileReader(),
        view_box = $(this).parent('.recipe-main__top--image');
        console.log(fileprop);
    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    // filereader.readAsDataURL(fileprop);
    console.log(fileprop);

    var img = '<div class="img_view"><img alt="" class="img" width = "280px"></div>';
    $(".recipe-main__top--image").append(img);
    // console.log(find_img);
    // console.log(filereader);
    // console.log(view_box.context.value);


    filereader.onload = function(e) {
      // console.log(e);
      var loadedImageUri = e.target.result;
      // console.log(loadedImageUri);
      var form = $('#recipe-registration').get()[0];
      console.log(form);
      console.log(form[3]);
      // var formData = new FormData(form[3]);
      // var formData = new FormData($(this)[0]);
      var formData = new FormData($("#recipe-registration")[0]);
      // formData.append("image", loadedImageUri);
      // console.log(formData.get('image'));
      // console.log(loadedImageUri);
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
        // console.log(data);
        // $('.recipe-main__top--image').children().remove();
      })
      .fail(function(){
        window.alert('画像が読み込めません。');
      })
    //   // img_del(view_box);
    }
    filereader.readAsDataURL(fileprop);
    // var form = $('#recipe-registration').get();
    // console.log(form);
    // var formData = new FormData(form);
    // console.log(formData);
    // console.log(filereader.result);
  });
});
