/**
 * Created by Deepak Sisodiya on 02/12/14.
 */

function getRequest(file, callback) {
    var oReq = new XMLHttpRequest();
    oReq.open("get", file, true);
    oReq.send();
    oReq.onload = callback;
}

var dataConfig;
getRequest("config.json", function () {
    dataConfig = JSON.parse(this.responseText);
    common(dataConfig[0], "iframeTemplate", "section");
    common(dataConfig, "navBar", "nav");
});

function common(dataObj, tempId, tagId){
    var tempStr = $("#" + tempId).html();
    var compileTemp = _.template(tempStr);
    var tempHTML = compileTemp({
        obj:dataObj
    })
    $(tagId).html(tempHTML);
}

function loadConfig(index){
    var tempStr = $("#iframeTemplate").html();
    var compileTemp = _.template(tempStr);
    var tempHTML = compileTemp({
        obj:dataConfig[index]
    })
    $("section").html(tempHTML);
}