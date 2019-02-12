if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("IML") == undefined) {
    var p;
    
    p = {};
    p._path = '/dwr';

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getConfiguration = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getConfiguration', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getYears = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getYears', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getPublication = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getPublication', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {class java.lang.String} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.sendMail = function(p0, p1, p2, callback) {
      return dwr.engine._execute(p._path, 'IML', 'sendMail', arguments);
    };

    /**
     * @param {interface java.util.List} p0 a param
     * @param {class se.elanders.iml.remoteobjects.beans.DeliveryInformationBean} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.createOrder = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'IML', 'createOrder', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getShoppingBasket = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getShoppingBasket', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getMarkets = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getMarkets', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {int} p1 a param
     * @param {int} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.freeTextSearch = function(p0, p1, p2, callback) {
      return dwr.engine._execute(p._path, 'IML', 'freeTextSearch', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getUserDetails = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getUserDetails', arguments);
    };

    /**
     * @param {long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getPages = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getPages', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {interface java.util.List} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getImagesOnPages = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getImagesOnPages', arguments);
    };

    /**
     * @param {interface java.util.Map} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setUserDetails = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'setUserDetails', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.addImageToShoppingBasket = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'addImageToShoppingBasket', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.findMostRelevantPublications = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'findMostRelevantPublications', arguments);
    };

    /**
     * @param {long} p0 a param
     * @param {int} p1 a param
     * @param {int} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.findRelatedSpreads = function(p0, p1, p2, callback) {
      return dwr.engine._execute(p._path, 'IML', 'findRelatedSpreads', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getPublicationTypes = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getPublicationTypes', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.removeImageFromShoppingBasket = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'removeImageFromShoppingBasket', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.removeAllFromShoppingBasket = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'removeAllFromShoppingBasket', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {class java.lang.Long} p1 a param
     * @param {class java.lang.Long} p2 a param
     * @param {int} p3 a param
     * @param {int} p4 a param
     * @param {function|Object} callback callback function or options object
     */
    p.searchPublications = function(p0, p1, p2, p3, p4, callback) {
      return dwr.engine._execute(p._path, 'IML', 'searchPublications', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {int} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getPublicationsInNeedOfApproval = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getPublicationsInNeedOfApproval', arguments);
    };

    /**
     * @param {long} p0 a param
     * @param {interface java.util.List} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getPagesWithPageNumbers = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getPagesWithPageNumbers', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setGuiLanguage = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'setGuiLanguage', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.isLoggedIn = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'isLoggedIn', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.abortFileUpload = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'abortFileUpload', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getJobs = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getJobs', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.login = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'IML', 'login', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.logout = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'logout', arguments);
    };

    /**
     * @param {long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.triggerAssetExport = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'triggerAssetExport', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.resetPasswordRequest = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'resetPasswordRequest', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getFileUploadInfo = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getFileUploadInfo', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getSelectableValueDependencies = function(callback) {
      return dwr.engine._execute(p._path, 'IML', 'getSelectableValueDependencies', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {class java.lang.Long} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getSelectableValuesFor = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getSelectableValuesFor', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.checkHotkeyAccessForUser = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'checkHotkeyAccessForUser', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getSelectableValuesLabels = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getSelectableValuesLabels', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.executeJob = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'executeJob', arguments);
    };

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.removeUser = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'removeUser', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getPasswordScore = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'getPasswordScore', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.ping = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'ping', arguments);
    };

    /**
     * @param {interface java.util.Map} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.registerAccountRequest = function(p0, callback) {
      return dwr.engine._execute(p._path, 'IML', 'registerAccountRequest', arguments);
    };
    
    dwr.engine._setObject("IML", p);
  }
})();

