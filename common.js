/**
 * Created by Deepak Sisodiya on 04/12/14.
 */


var App = {};
App.getRequest = function (file, callback) {
    var oReq = new XMLHttpRequest();
    oReq.open("get", file, true);
    oReq.send();
    oReq.onload = function () {
        App.data = JSON.parse(this.responseText);
        callback(App.data);
    };
};
App.common = function (dataObj, tempId, tagId) {
    var tempStr = $("#" + tempId).html();
    var compileTemp = _.template(tempStr);
    var tempHTML = compileTemp({
        obj:dataObj
    });
    $(tagId).html(tempHTML);
};