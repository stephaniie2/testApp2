var log = console.log;

function getTurnJSinfo(element) {
  log("vad händer")
  //log(element);
  return element;
}

function fetchDragulaData(currentView) {
  //og("start Dragula");
  m3.getImagesOnPages(25969125, currentView, relevantPub);

  function relevantPub(relPub) {
    $('#dragula_left').empty();
    relPub.forEach(function (element) {
      $("#dragula_left").append(addData(element));
    });
  }
}

function addData(images) {
  var newDiv = document.createElement("div");
  var newText = document.createElement("p");
  $(newText).css('font-size', '10px')
  newText.append(images.label);
  var newPicture = document.createElement("img");
  $(newPicture).css("max-width", "100px").css("max-height", "100px");
  newPicture.src = images.imageURL.split('../').join(m3url + '/');
  newDiv.appendChild(newPicture);
  newDiv.appendChild(newText);
  return newDiv;
}
