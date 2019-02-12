var redirectAfterLogin = null;
var working = false;

var m3url = 'http://imagehousepictures.inter-ikea.com';
var m3 = IML;
m3._path = m3url + '/dwr';
var config = {};
var log = console.log;




/*
 * Turn.js responsive book
 */

/*globals window, document, $*/
// function startServerTurnJS() {
(function () {
  // Value.
  'use strict';
  var module = {
    ratio: 1.38,
    init: function (id) {
      var me = this;
      // if older browser then don't run javascript
      if (document.addEventListener) {
        this.el = document.getElementById(id);

        this.fetchPages()
		  .then((publ) => this.addPages(this.el, publ))
          .then(() => this.resize())
          .then(() => this.plugins());

        // on window resize, update the plugin size
        window.addEventListener('resize', function (e) {
          var size = me.resize();
          $(me.el).turn('size', size.width, size.height);
        });
      }
    },
    fetchPages: () => new Promise((resolve) => m3.getPages(25969125, resolve))
      .then((Pages) => Pages
        .map((page) => page.largeImageURL.split('../').join(m3url + '/')))
      .then((publ) => publ)
      .catch((error) => console.log(error.message)),
    addPages: function (book, publ) {
      getTurnJSinfo(publ);
      // log("Did iget it?");
      // log(globalPublicationArray);
      for (var page = 0; page < publ.length; page++) {
        book.appendChild(this.createPage(publ[page]));
      }
    },
    createPage: function (pageNumber) {
      var newDiv = document.createElement("div");
      newDiv.className = "page";
      var newPicture = document.createElement("img");
      //newPicture.src = url + pageNumber + extension;
      newPicture.src = pageNumber;
      newDiv.appendChild(newPicture);
      return newDiv;
    },
    resize: function () {
      // reset the width and height to the css defaults
      this.el.style.width = '';
      this.el.style.height = '';
      var width = this.el.clientWidth,
        height = Math.round(width / this.ratio),
        padded = Math.round(document.body.clientHeight * 0.6);
      // if the height is too big for the window, constrain it
      if (height > padded) {
        height = padded;
        width = Math.round(height * this.ratio);
      }
      // set the width and height matching the aspect ratio
      this.el.style.width = width + 'px';
      this.el.style.height = height + 'px';
      return {
        width: width,
        height: height
      };
    },
    plugins: function () {
      // run the plugin
      var book;

      $(this.el).turn({
        gradients: true,
        acceleration: true,
        when: {
          turning: function () {
            book = $(this);
          },

          turned: function (e, page) {
            book = $(this);
            let currentView = $(this).turn("view");
            $('#slider').slider('value', getViewNumber(book, page));
            fetchDragulaData(currentView);
          },

          start: function () {
            moveBar(true);
          },

          end: function () {
            book = $(this);
            setTimeout(function () {
              $('#slider').slider('value', getViewNumber(book));

            });
            moveBar(false);
          }
        }
      });
      // hide the body overflow
      document.body.className = 'hide-overflow';
      $('#slider').slider('option', 'max', numberOfViews(book));

      function numberOfViews(book) {
        return book.turn('pages');
      }

      function moveBar(yes) {
        // $('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
      }

      function getViewNumber(book, page) {
        return parseInt((page || book.turn('page')));
      }

      function infoTurnJS() {

      }
    }

  };
  module.init("book");
}());
