// Custom Configurations for Index Page
var redirectAfterLogin = null;
var working = false;

var m3url = 'http://imagehousepictures.inter-ikea.com';
var m3 = IML;
m3._path = m3url + '/dwr';
var config = {};
var log = console.log;

$(document).ready(function() {
    var btnuserMarket = $("#userMarketText");
    var btnAllMarket = $("#allMarketText");

    $(btnuserMarket).click(function(){
        $('#userMarketPopup').toggleClass("grow");
    });

    $(btnAllMarket).click(function(){
        $('#allMarketPopup').toggleClass("grow");
    });



    function freeTextSearchMain(freeSearch) {
        m3.freeTextSearch(freeSearch, 0, 10, callback);
        function callback(ans) {
           // log(JSON.stringify(ans));
            log(ans);
        }
    }

    var searchInput;
    // Click on Right side Search Icon.
    $("#freeTextSearchButton").click(function(){
        log("clicked");
        searchInput = $("#cboSearch").val();
        freeTextSearchMain(searchInput);
    });

    $('input[name="quickSearch"]').keyup(function(){
        if($(this).val().length === 0){
            $("#freeTextSearchButton").addClass("disabledButton");
        } else {
            $("#freeTextSearchButton").removeClass("disabledButton");
        }
    });
});
