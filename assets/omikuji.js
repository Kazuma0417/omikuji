var omikujiResult = [
  "大吉",
  "中吉",
  "小吉",
  "凶"
];

$(function() {
  $("#omikujiBtn").click(function() {
    var btn = $(this);
    btn.prop("disabled", true);
    //おみくじを振る
    $("#omikujiImg").addClass("buruburu");
    //ブルブルを止める
    setTimeout(function() {
      $("#omikujiImg").removeClass("buruburu");
    }, 1500);
    //おみくじをひっくり返す
    setTimeout(function() {
      $("#omikujiImg").addClass("rotate");
    }, 2000);
    //結果が表示される
    setTimeout(function() {
      var result = omikujiResult[Math.floor( Math.random() * omikujiResult.length)];
      $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
    }, 3500);
    //リセットする
    setTimeout(function() {
      $("#omikujiResult").html("<img id='omikujiImg' src='assets/omikuji.png'>");
      btn.prop("disabled", false);
    }, 8000);
  });
});