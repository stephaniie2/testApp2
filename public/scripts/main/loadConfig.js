function loadConfig() {
    m3.getConfiguration(callback);
    function callback(conf) {
        config = conf;
        //showMenu();
        showWelcome(config.welcomeText);
        showCopyrightText(config.copyrightText);
        showSupportContactText(config.supportContactText);
    }
}
/* For loadConfig */
function showMenu(html, callback) {
    $("#topMenu").fadeOut(nextStep);

    function nextStep() {
        $("#topMenu").fadeIn(callback);
        $("#topMenu").css("display", "flex");
    }
}

function showWelcome(html, callback) {

    $("#welcome").fadeOut(nextStep);

    function nextStep() {
        $("#welcome").append(html).fadeIn(callback);
    }
}

function showCopyrightText(html, callback) {

    $("#copyrightText").fadeOut(nextStep);

    function nextStep() {
        $("#copyrightText").html(html).fadeIn(callback);
    }
}

function showSupportContactText(html, callback) {

    $("#supportContactText").fadeOut(nextStep);

    function nextStep() {
        $("#supportContactText").html(html).fadeIn(callback);
    }
}
