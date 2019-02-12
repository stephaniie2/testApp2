/**
 * Login Functionality.
 */
function loginShow() {
    $("#btnLogin").click(btnLoginOnClick);
    $("#btnShowForgotPassword").click(showForgotPassword);
    $("#btnOpenRequestAccount").click(requestAccountShow);
    $("#login_popup").animate({"top": "28px"}, {duration: 800});
}

/* showForgotPassword - First Function used in loginShow */
function btnLoginOnClick() {
    if (working) return;
    working = true;

    var u = $("input[name='username']").val(),
        p = $("input[name='password']").val();

    m3.login(u, p, callback);

    function callback(answer) {

        if (answer.indexOf('OK') == 0) {
            if (redirectAfterLogin !== null) {
                window.location.replace("/" + redirectAfterLogin);
            } else {
                contentDisable();
                licensShow();
            }
        } else {
            alert(answer);
        }
        working = false;

    }
}

function licensShow() {
    $("#btnLicenseCancel").click(btnLicenseCancelOnClick);
    $("#btnLicenseOK").click(btnLicenseOKOnClick);
    $("#licens_popup").fadeIn();
}

/**
 * Log out user and Refresh Page.
 */
function btnLicenseCancelOnClick() {
    m3.logout();
    location.reload();
}

/* For btnLicenseCancelOnClick */
function licensHide() {
    $("#btnLicenseCancel").unbind('click');
    $("#btnLicenseOK").unbind('click');
    $("#licens_popup").fadeOut();
}


function btnLicenseOKOnClick() {
    loginHide();
    licensHide();
    contentBlur();
    waitShow();
    startCoverflow();
    mainShow();
}

function loginHide() {
    $("#btnLogin").unbind();
    $("#btnShowForgotPassword").unbind();
    $("#btnOpenRequestAccount").unbind();
    $("#login_popup").css('display', 'none');
}


/* No function for showForgetPassword */

/* requestAccountShow, used in loginShow */
function requestAccountShow() {
    $("#generic_popup").hide();
    $("#arGDPR").html("By requesting an account to IKEA Image House (IIH), you consent that the IIH system save your credentials other information needed for the processing of orders.<br>See our <a href='../privacystatement.html' target='privacy'>Privacy Statement</a> for more information.");
    $("#btnRaSend").click(btnArSendOnClick);
    $("#btnRaCancel").click(requestAccountHide);
    $("input[name='arPassword']").keyup(txtArPasswordChanged);
    $("input[name='arPassword']").passStrength({
        userid: "input[name='arUsername']",
        callback: "passStrengthCallback"
    });
    $("#requestAccount_popup").fadeIn();
}

/* For requestAccountShow, used in loginShow */

function btnArSendOnClick() {

    if (working) return;
    working = true;

    waitShow();

    var data = {};
    data.username = $("input[name='arUsername']").val();
    data.password = $("input[name='arPassword']").val();
    data.mail = $("input[name='arEmail']").val();
    data.firstname = $("input[name='arFirstname']").val();
    data.lastname = $("input[name='arLastname']").val();
    /*
    data.company = $("input[name='arCompany']").val();
    data.address = $("input[name='arAddress']").val();
    data.zipcode = $("input[name='arZipcode']").val();
    data.city = $("input[name='arCity']").val();
    data.country = $("input[name='arCountry']").val();
    data.phone = $("input[name='arPhone']").val();
    */
    m3.registerAccountRequest(data, callback);

    function callback(answer) {

        waitHide();

        if (answer.indexOf('OK') === 0) {
            requestAccountHide();
            alert("Thank you, we will get back to you when your account is ready");
        } else {
            alert(answer);
        }

        working = false;
    }
}

function txtArPasswordChanged() {
    alert("txtArPasswordChanged");
}


/* showForgotPassword - Second Function used in loginShow */
function showForgotPassword() {

    $("#generic_popup").hide();
    requestAccountHide();

    var html = "<div id='forgotPasswordBox' class='center'>\n";
    html += "<b>Forgot your password?</b><br><br>\n";
    html += "Enter your email address and we'll help you reset your password.<br><br>\n";
    html += "<input type='input' name='email' id='txtEmail' size='50'/><br>\n";
    html += "<div id='msgWrongEmail'>This does not appear to be a valid email address.<br>Please verify the address and try again.</div><br>\n";
    html += "<button id='btnResetPassword' type='button' class='green' >continue</button><br>\n";
    html += "<br>\n";
    html += "<div id='m3answer'></div>\n";
    html += "</div>\n";
    $("#generic_popup").html(html);
    $("#msgWrongEmail").hide();
    $("#generic_popup").fadeIn();
    $("#btnResetPassword").click(resetPassword);

}

/* For showForgotPassword */

function requestAccountHide() {
    $("#btnRaSend").unbind();
    $("#btnRaCancel").unbind();
    $("input[name='arPassword']").unbind();
    $("#requestAccount_popup").fadeOut();
}

function resetPassword() {

    // Do not process is button is disabled
    if ($("#btnResetPassword").hasClass('disabled')) {
        return false;
    }

    var email = $("#txtEmail").val();

    if (!isValidEmailAddress(email)) {
        $("#msgWrongEmail").fadeIn();
        $("#txtEmail").focus();
    } else {
        $("#msgWrongEmail").fadeOut();
        $("#txtEmail").prop('disabled', true);
        $("#btnResetPassword").addClass("disabled");
        M3.resetPasswordRequest(email, resetPasswordRequestCallback);
    }
}

/* For resetPassword */
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function resetPasswordRequestCallback(data) {
    $("#m3answer").html(data);
    $("input").prop('disabled', false);
    $("#btnResetPassword").removeClass("disabled");
}