// Custom Configurations for Index Page
var redirectAfterLogin = null;
var working = false;

var m3url = 'http://imagehousepictures.inter-ikea.com';
var m3 = window.IML;
m3._path = m3url + '/dwr';
var config = {};
var log = console.log;

$(function () {
    loadParameters();
    checkLoggedIn();

    document.getElementById('logout').onclick = function() {
        console.log("logout was clicked");
        m3.logout();
        location.reload();

    };
});

/*****************************************************************************************/

function loadParameters() {
    redirectAfterLogin = findGetParameter("returnto");
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
/**
 * Controls if User is logged in or not
 */
function checkLoggedIn() {
    m3.isLoggedIn(callback);
    function callback(b) {
        if (b) {
            if (redirectAfterLogin!==null) {
                window.location.replace("/"+redirectAfterLogin);
            } else {
                userMarketCheck();
                startCoverflow();
                /* complete Bugg 2: Vid inloggning. H�mtar Coverflow DATA efter reload av sidan..*/
                $("#footer").removeClass("footer-popup");
                search();

            }
        } else {
            // If User isn't logged in, show Log In Window.
            loginShow();
        }
    }
}

/**
 *  Partial Functions for Smaller Tasks
 */

function contentBlur() {
    $('#view_home').css("display", "block");
    $('#menu').css("display", "flex");
}

function contentDisable() {
    $("#login_popup").css('filter', 'blur(1px)').css('opacity', '0.5').prop('disable', 'true');
    $("#header").css('filter', 'blur(1px)').css('opacity', '0.5').prop('disable', 'true');
    $("#menu").css('filter', 'blur(1px)').css('opacity', '0.5').prop('disable', 'true');
    $("#view_home").css('filter', 'blur(1px)').css('opacity', '0.5').prop('disable', 'true');
    $(".footer").css('filter', 'blur(1px)');

}

function contentEnable() {
    $("#header").css('filter', 'blur(0px)').css('opacity', '1').prop('disable', 'false');
    $("#menu").css('filter', 'blur(0px)').css('opacity', '1').prop('disable', 'false');
    $("#view_home").css('filter', 'blur(0px)').css('opacity', '1').prop('disable', 'false');
    $(".footer").css('filter', 'blur(0px)');
    $(".footer").removeClass("footer-popup");

    $("#login_popup").css('z-index', '-1');
    $("input[name='password']").val("");
}

function waitHide() {
    contentEnable();
    $("#wait").fadeOut();
}

function waitShow() {
    $("#wait").fadeIn();
}

/* For mainShow */
function mainShow() {
    m3.getUserDetails(callback);

    // Check if userMarket is set.
    function callback(userMarket) {
        const market = userMarket.marketId;
        console.log("userMarket is changed to: " + market);
    }

    $("#cboSearch").on('keypress', function (e) {
        if (e.which == 13) {
            alert('You pressed enter!');
        }
    });
    waitHide();
}

/* doMain - Display all information and enable search */
// TODO: #BUGG 4: S�K "Free text search" saknar funktion.
function search() {
    showSearchOptions();
    loadConfig();
}
