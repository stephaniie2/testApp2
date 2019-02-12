//Custom Configurations for Results Page
$(document).ready(function() {

    $("#menu").css('display', 'flex');
    $(".footer").removeClass('footer-popup');
    //$("#dragula_right").children().css('display', 'none');

    $("#prevBtn").click(function () {
        $("#book").turn("previous");

    });

    $("#nextBtn").click(function () {
        $("#book").turn("next");

    });

    $("#pageFld").val($("#book").turn("page"));

    $("#book").bind("turned", function (event, page, view) {
        $("#pageFld").val(page);
    });

    $("#pageFld").on('input', function () {
        $("#book").turn("page", $(this).val());
    });

    // Slider
    $("#slider").slider({
        start: function (event, ui) {
        },

        stop: function () {
            $('#book').turn('page', Math.max(1, $(this).slider('value')));
        }
    });
});