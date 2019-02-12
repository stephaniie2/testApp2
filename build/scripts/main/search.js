/* For doMain */
function showSearchOptions() {

    m3.getYears(showYears);
    m3.getMarkets(showMarkets);
    m3.getPublicationTypes(publicationsType);

    function freeTextSearchMain(freeSearch) {
        m3.freeTextSearch(freeSearch, 0, 10, callback);
        function callback(ans) {
            log(JSON.stringify(ans));
        }
    }

    function showYears(years) {

        var cboYear = $("#cboYear");
        cboYear.html("");
        years.forEach(function (year) {
            cboYear.append('<option value=' + year.id + '>' + year.label + '</option>');
        });
    }

    function showMarkets(markets) {

        var cboMarket = $("#cboMarket");
        cboMarket.html("");

        markets.forEach(function (market) {
            cboMarket.append('<option value=' + market.id + '>' + market.label + '</option>');
        });

        // Check if Market is Set. If Set change cboMarket select box to UserMarket
        m3.getUserDetails(callback2);
        function callback2(userMarket) {

            var userMarketID = userMarket.marketId;

            if (userMarketID != 0) {
                console.log("cboMarket should be changed: " + userMarketID);
                $("#cboMarket").val(userMarketID);
                $("#cboMarket option[value=5651037]");
            }
        }
    }

    function publicationsType(pubTypes) {

        var cboType = $("#cboType");
        cboType.html("");
        pubTypes.forEach(function (year) {
            cboType.append('<option value=' + year.id + '>' + year.label + '</option>');
        });
    }
}

function showPublications() {
    m3.getPublication(25093730, callback2);
    function callback2(ans) {
        $.each(ans, function (key, value) {
            forEach(ans)
        });
    }
}

