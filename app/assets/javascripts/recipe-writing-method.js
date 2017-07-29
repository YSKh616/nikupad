$(function() {
  var oldArrow_title;
  var oldArrow_image;
  var oldArrow_introduction;
  var oldArrow_material;
  var oldArrow_method;
  var oldArrow_point;
  var oldArrow_background;
  var titleFlag = 0;
  var imageFlag = 0;
  var introductionFlag = 0;
  var materialFlag = 0;
  var methodFlag = 0;
  var pointFlag = 0;
  var backgroundFlag = 0;
  var allFlag = 0;

  // 全て閉じたらcssの設定を元に戻す
  function cssRestore() {
    if (allFlag == 0) {
      $(".method").find('th').css("padding-left", "");
      $(".method").find('th').css("padding-right", "");
    }
  }
  function arrowEdit() {
    var html =  '<i id="awesome" class="fa fa-angle-up"></i>';
    return html;
  }
  function addDescription(message) {
    var html =  '<div class="description">'+
                message+
                '</div>';
    return html;
  }
  function addAsterisk(asterisk) {
    var html =  '<div class="asterisk">'+
                asterisk+
                '</div>';
    return html;
  }

  $(".method").on("click", "#writing-title", function(){
    if (titleFlag == 0) {
      var message = "レシピに合ったタイトルをつけてください。";
      allFlag++;
      oldArrow_title = $("#writing-title").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_title).remove();
      $("#writing-title").children('th').prepend(upArrow);
      titleFlag++;
      var description = addDescription(message);
      $("#writing-title").children('td').append(description);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (titleFlag == 1) {
      allFlag--;
      $("#writing-title").find('#awesome').remove();
      $("#writing-title").children('th').prepend(oldArrow_title);
      titleFlag = 0;
      $("#writing-title").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

  $(".method").on("click", "#writing-image", function(){
    if (imageFlag == 0) {
      var message = "レシピの完成写真をのせてください。イメージが正しく伝わり調理しやすくなります。";
      var asterisk = "※人や動物が映り込んだ写真、オリジナルでないものはご遠慮ください。";
      allFlag++;
      oldArrow_image = $("#writing-image").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_image).remove();
      $("#writing-image").children('th').prepend(upArrow);
      imageFlag++;
      var description = addDescription(message);
      var comment = addAsterisk(asterisk);
      $("#writing-image").children('td').append(description);
      $("#writing-image").find('div').append(comment);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (imageFlag == 1) {
      allFlag--;
      $("#writing-image").find('#awesome').remove();
      $("#writing-image").children('th').prepend(oldArrow_image);
      imageFlag = 0;
      $("#writing-image").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

  $(".method").on("click", "#writing-introduction", function(){
    if (introductionFlag == 0) {
      var message =  "レシピの味や魅力をわかりやすい言葉で書いてください。";
      allFlag++;
      oldArrow_introduction = $("#writing-introduction").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_introduction).remove();
      $("#writing-introduction").children('th').prepend(upArrow);
      introductionFlag++;
      var description = addDescription(message);
      $("#writing-introduction").children('td').append(description);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (introductionFlag == 1) {
      allFlag--;
      $("#writing-introduction").find('#awesome').remove();
      $("#writing-introduction").children('th').prepend(oldArrow_introduction);
      introductionFlag = 0;
      $("#writing-introduction").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

  $(".method").on("click", "#writing-material", function(){
    if (materialFlag == 0) {
      var message = "レシピの味が再現できるよう、材料（食材や調味料）とその分量を書いてください。";
      var asterisk = "※分量を記載しにくい材料は「少々」や「適量」などで問題はありません。";
      allFlag++;
      oldArrow_material = $("#writing-material").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_material).remove();
      $("#writing-material").children('th').prepend(upArrow);
      materialFlag++;
      var description = addDescription(message);
      var comment = addAsterisk(asterisk);
      $("#writing-material").children('td').append(description);
      $("#writing-material").find('div').append(comment);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (materialFlag == 1) {
      allFlag--;
      $("#writing-material").find('#awesome').remove();
      $("#writing-material").children('th').prepend(oldArrow_material);
      materialFlag = 0;
      $("#writing-material").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

  $(".method").on("click", "#writing-method", function(){
    var message = "お料理初心者の方でもわかるよう、下ごしらえの方法や調理手順を書いてください。";
    if (methodFlag == 0) {
      allFlag++;
      oldArrow_method = $("#writing-method").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_method).remove();
      $("#writing-method").children('th').prepend(upArrow);
      methodFlag++;
      var description = addDescription(message);
      $("#writing-method").children('td').append(description);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (methodFlag == 1) {
      allFlag--;
      $("#writing-method").find('#awesome').remove();
      $("#writing-method").children('th').prepend(oldArrow_method);
      methodFlag = 0;
      $("#writing-method").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

  $(".method").on("click", "#writing-point", function(){
    var message = "調理時の注意点や、おいしく作るコツなどを教えてください。";
    if (pointFlag == 0) {
      allFlag++;
      oldArrow_point = $("#writing-point").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_point).remove();
      $("#writing-point").children('th').prepend(upArrow);
      pointFlag++;
      var description = addDescription(message);
      $("#writing-point").children('td').append(description);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (pointFlag == 1) {
      allFlag--;
      $("#writing-point").find('#awesome').remove();
      $("#writing-point").children('th').prepend(oldArrow_point);
      pointFlag = 0;
      $("#writing-point").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

  $(".method").on("click", "#writing-background", function(){
    if (backgroundFlag == 0) {
      var message = "レシピが生まれたきっかけを教えてください。";
      var asterisk = "※◯◯好きな夫のために作った、思い出の母の味をアレンジ など、具体的に書いてください。";
      allFlag++;
      oldArrow_background = $("#writing-background").find('i');
      var upArrow = arrowEdit();
      $(oldArrow_background).remove();
      $("#writing-background").children('th').prepend(upArrow);
      backgroundFlag++;
      var description = addDescription(message);
      var comment = addAsterisk(asterisk);
      $("#writing-background").children('td').append(description);
      $("#writing-background").find('div').append(comment);
      $(".method").find('th').css("padding-left", "10px");
      $(".method").find('th').css("padding-right", "9px");
    } else if (backgroundFlag == 1) {
      allFlag--;
      $("#writing-background").find('#awesome').remove();
      $("#writing-background").children('th').prepend(oldArrow_background);
      backgroundFlag = 0;
      $("#writing-background").find('div').remove();
      cssRestore();
    } else {
      ;
    }
  });

});
