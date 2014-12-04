/**
 * Created by Deepak Sisodiya on 04/12/14.
 */


var App = {};
App.getRequest = function (file, callback) {
    var oReq = new XMLHttpRequest();
    oReq.open("get", file, true);
    oReq.send();
    oReq.onload = function () {
        callback(JSON.parse(this.responseText));
    };
};
App.loadTemplate = function (dataObj, tempId, domNode) {
    var tempStr = $("#" + tempId).html();
    var compileTemp = _.template(tempStr);
    var tempHTML = compileTemp({
        obj:dataObj
    });
    domNode.html(tempHTML);
};