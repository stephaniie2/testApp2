/**
 * Control if User Market ID is SET
 */
function userMarketCheck() {
    m3.getUserDetails(callback);
    function callback(userMarket) {
        // Control Users Market Id.
        var userMarketID = userMarket.marketId;

        // If userMarketID is not set, equal 0.
        if (userMarketID == "0") {
            console.log("userMarket isn't set. Value: " + userMarketID);

            contentBlur(); // Blur main content.
            userMarketShow(); // Display User Market Popup.

            m3.getMarkets(callback);
            function callback(markets) {
                let cboMarket_popup = $("#cboMarket_popup");
                cboMarket_popup.html("");

                markets.forEach(function (market) {
                    cboMarket_popup.append('<option value=' + market.id + '>' + market.label + '</option>');
                });
            }
        } else {
            $('#view_home').css("display", "block");
            $('#menu').css("display", "flex");
        }
    }

    /**
     * userMarket Window is Enabled. Click "OK" starts btnMarketOKOnClick.
     */
    function userMarketShow() {
        $("#btnUserMarketOK").click(btnMarketOKOnClick);
        $("#userMarket_popup").fadeIn();
    }

    /**
     * Button functionality for User Market.
     * Sets User Market for User, enables content and hides userMarket window.
     * waitShow
     * mainShow..
     *
     */
    function btnMarketOKOnClick() {
        userMarketSet();
        contentEnable();
        userMarketHide();
        waitShow();
        mainShow();
    }

    function userMarketHide() {
        $("#btnUserMarketOK").unbind('click');
        $("#userMarket_popup").fadeOut();
    }

    function userMarketSet() {
        const userSelectedMarket = $('#cboMarket_popup option:selected').val();
        console.log("Market is: " + userSelectedMarket);
        m3.setUserDetails({ "marketId": userSelectedMarket}); // Set Selected Market ID for User.
        // Check if Market is Set.
        m3.getUserDetails(marketId);
        function marketId(userMarket) {
            console.log("userMarket is now: " + userMarket.marketId);
        }
    }
}