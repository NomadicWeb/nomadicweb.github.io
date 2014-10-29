// set up some variables
var $mainContent = $(".switch-content"),
    $pageWrap    = $(".container"),
    baseHeight   = 0,
    $el;

// calculate wrapper heights to prevent jumping when loading new content
$pageWrap.height($pageWrap.height());
baseHeight = $pageWrap.height() - $mainContent.height();

$(function() {
  if (Modernizr.history){
    // history is supported; do magical things
    console.log("Modernizr.history supported!");

    $(".menu").delegate("a", "click", function(e) {
      e.preventDefault();
      console.log("Hijacking the click event!");
      var _href = $(this).attr("href");
      history.pushState(null, null, _href);
      loadContent(_href);
    });

  }else{
    // history is not supported; nothing fancy here
    console.log("Modernizr.history not supported!");
  }
});

function loadContent(href){
  console.log("Attempting to AJAX-in some content");
  $mainContent
    .fadeOut(200, function() { // fade out the content of the current page
      console.log("Just faded out the .wrapper");
      $mainContent
        .hide()
        .load(href + " .switch-content", function(){ // load the contents of whatever href is
          $mainContent.fadeIn(200, function(){
            console.log("AJAX-in complete");

            // should really only do this on
            // the index page - @todo
            rotateTextSetup();

            $pageWrap.animate({height: baseHeight + $mainContent.height() + "px"});
         });
      
      $("nav a").removeClass("current");
      $("nav a[href$='" + href + "']").addClass("current");
    });
  });
}

function rotateTextSetup(){
  return $("#build-rotator").Morphext({ animation: "fadeIn", separator: ",", speed: 3500 });
}

