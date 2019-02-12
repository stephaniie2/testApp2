$(document).ready(function() {
    $(".swapButton").click(function() {
        $("#div_1").text($("#div_1").text() == 'Search' ? 'Menu' : 'Search');
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(".menuSecondary").fadeOut('slow', function() {
                // will be called when the element finishes fading out
                // if selector matches multiple elements it will be called once for each
                $(".menuLeft").fadeIn();
                $(".menuRight").fadeIn();
            });
        } else {
            $(this).attr('data-click-state', 1);
            $(".menuLeft, .menuRight").fadeOut('slow', function() {
                $(".menuSecondary").css("display", "flex");
            });
        }
    });
});
