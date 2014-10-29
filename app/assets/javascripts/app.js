 $("#build-rotator").Morphext({ animation: "fadeIn", separator: ",", speed: 3500 });

$(function() {
  if (Modernizr.history){
    // history is supported; do magical things
    console.log("Modernizr.history supported!");

    $(".menu").delegate("a", "click", function() {
      console.log("Hijacking the click event!");
      var _href = $(this).attr("href");
      history.pushState(null, null, _href);
      //loadContent(_href);
    });

  }else{
    // history is not supported; nothing fancy here
    console.log("Modernizr.history not supported!");
  }
});
