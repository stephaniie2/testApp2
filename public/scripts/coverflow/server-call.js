var log = console.log;
function startCoverflow() {
    infoCoverflow();
    var userMarketArray = [];
    var allMarketArray = [];
    var IMLuser = [];

    function infoCoverflow() {
        log("fetch coverFlow Information");
        m3.findMostRelevantPublications(10, relevantPub);
        function relevantPub(relPub) {
          //  log(relPub);
            userMarketArray = relPub.newestPubsForThisUsersMarkets;
            allMarketArray = relPub.newestPubsForAllMarkets;
          //  log(userMarketArray);
            // Set Default Text for userMarket also in Popup
            $("#userMarketText, #userMarketPopupHeading").text(userMarketArray[0].name);

            // Sets Default Values in userMarket Popup expect Image
            $("#userMarketPopupMarket").text(userMarketArray[0].market);
            $("#userMarketPopupLanguage").text(userMarketArray[0].language);
            $("#userMarketPopupYear").text(userMarketArray[0].year);
            $("#userMarketPopupType").text(userMarketArray[0].type);

            // Set Default Text for allMarket and userMarket also in Popup
            $("#allMarketText, #allMarketPopupHeading").text(allMarketArray[0].name);

            // Sets Default Values in allMarket Popup expect Image
            $("#allMarketPopupMarket").text(allMarketArray[0].market);
            $("#allMarketPopupLanguage").text(allMarketArray[0].language);
            $("#allMarketPopupYear").text(allMarketArray[0].year);
            $("#allMarketPopupType").text(allMarketArray[0].type);

            // userMarketArray.forEach(function(element) {
            //     coverflowName.push(element.name);
            // });
        }
    }

    return new Promise(function (resolve) {
        function relevantPub(relPub) {
            return resolve({
                IMLuser: relPub.newestPubsForThisUsersMarkets,
                IMLall: relPub.newestPubsForAllMarkets
            });
        }
        return m3.findMostRelevantPublications(10, relevantPub);
    })
        .then(({ IMLuser, IMLall }) => IMLuser.map((element) => element.assetId))
        .then((userMarketFrontPage) => Promise.all(userMarketFrontPage
            .map((element) => {
                return new Promise((resolve => {
                    m3.getPagesWithPageNumbers(element, [1], getPages);
                    function getPages(PublicationPages) {
                        return resolve(PublicationPages[0].largeImageURL.split('../').join(m3url + '/'));
                    }
                }));
            }))
        )
        .then((IMLuserMarketImages) => {
            // Reverse Array
            var playlist = IMLuserMarketImages.map((image) => ({ image }));
            var playlistReverse = [...IMLuserMarketImages].reverse().map((image) => ({ image }));

            // Set Default Image in userMarket Popup
            $("#userMarketPopupImage").attr("src",playlist[0].image);

            //Use created JSON in HTML
            coverflow2('player2').setup({
                //mode: "flash",
                flash: "coverflow.swf",
                width: '100%',
                playlist: playlistReverse,
                height: 250,
                y: -20,
                backgroundcolor: "666666",
                coverwidth: 120,
                coverheight: 150,
                fixedsize: true,
                textoffset: 50,
                textstyle: ".coverflow-text{color:#000000;text-align:center;font-family:Arial Rounded MT Bold,Arial;} .coverflow-text h1{font-size:14px;font-family:inherit;font-weight:normal;line-height:21px;} .coverflow-text h2{font-size:12px;font-family:inherit;font-weight:normal;} .coverflow-text a{color:#0000EE;}"
            }).on('ready', function () {
                this.on('focus', function (index, link) {
                    document.getElementById('cf-focus2').value = index;

                    // Sets Text in allMarket Container.
                    $("#allMarketText, #allMarketPopupHeading").text(allMarketArray[index].name);

                    // Sets Text in allMarket Popup
                    $("#allMarketPopupMarket").text(allMarketArray[index].market);
                    $("#allMarketPopupLanguage").text(allMarketArray[index].language);
                    $("#allMarketPopupYear").text(allMarketArray[index].year);
                    $("#allMarketPopupType").text(allMarketArray[index].type);
                    // $("#allMarketPopupImage").css('background-image', 'url(' + playlist[index].image + ')');

                    $("#allMarketPopupImage").attr("src",playlistReverse[index].image);
                });

                this.on('click', function (index, link) {
                    document.getElementById('cf-click2').value = index;
                });
            });

            //Use created JSON in HTML
            coverflow('player').setup({
                //mode: "flash",
                flash: "coverflow.swf",
                width: '100%',
                playlist: playlist,
                height: 250,
                y: -20,
                backgroundcolor: "666666",
                coverwidth: 120,
                coverheight: 150,
                fixedsize: true,
                textoffset: 50,
                textstyle: ".coverflow-text{color:#000000;text-align:center;font-family:Arial Rounded MT Bold,Arial;} .coverflow-text h1{font-size:14px;font-family:inherit;font-weight:normal;line-height:21px;} .coverflow-text h2{font-size:12px;font-family:inherit;font-weight:normal;} .coverflow-text a{color:#0000EE;}"
            }).on('ready', function () {
                this.on('focus', function (index, link) {
                    document.getElementById('cf-focus').value = index;

                    $('#userMarketPopup').removeClass("grow");

                    // Sets Text in userMarket Container.
                    $("#userMarketText, #userMarketPopupHeading").text(userMarketArray[index].name);

                    // Sets Text in userMarket Popup
                    $("#userMarketPopupMarket").text(userMarketArray[index].market);
                    $("#userMarketPopupLanguage").text(userMarketArray[index].language);
                    $("#userMarketPopupYear").text(userMarketArray[index].year);
                    $("#userMarketPopupType").text(userMarketArray[index].type);
                    // $("#userMarketPopupImage").css('background-image', 'url(' + playlist[index].image + ')');

                    $("#userMarketPopupImage").attr("src",playlist[index].image);



                });
                this.on('click', function (index, link) {
                    document.getElementById('cf-click').value = index;
                    // alert("clicked")
                    //window.location.replace("./index_result.html");
                });
            });
        })
}
