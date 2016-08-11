$(document).ready(function(){
  $("button#cats").click(function(){
    $("ul#cats").append("<li>Meeeeoooowwwwski!</li>");
    $("ul#dogs").append("<li>Rumph, Rolf, Ruffph!!</li>");

    $("ul#cats").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dogs").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#dogs").click(function(){
  $("ul#dogs").append("<li>Cough, cough, damn it hurts!!</li>");
  $("ul#cats").append("<li>Puuuurrrrrrrrrrr...</li>");

  $("ul#dogs").children("li").first().click(function(){
    $(this).remove();
  });
  $("ul#cats").children("li").first().click(function(){
    $(this).remove();
  });
});

//$("ul#cats").append("<li>Doe, Rey, Mee, Fa, So, La, Tee!</li>");
//$("ul#cats").append("<li>REAAAAAHHHHWR!</li>");

//$("ul#dogs").append("<li>Rawrz!</li>");
//$("ul#dogs").append("<li>I need to quit smoking!</li>");
