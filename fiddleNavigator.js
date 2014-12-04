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
function common(dataObj, tempId, tagId){
    var tempStr = $("#" + tempId).html();
    var compileTemp = _.template(tempStr);
    var tempHTML = compileTemp({
        obj:dataObj
    });
    $(tagId).html(tempHTML);
}

getRequest("config.json", function () {
    dataConfig = JSON.parse(this.responseText);
    common(dataConfig, "navBar", "nav");
    $(".link").click(function () {
        var index = this.getAttribute("data-index");//var index = $(this).attr("data-index");//var index = $(this).data("index");//var index = this.dataset.index
        common(dataConfig[index], "iframeTemplate", "section");
    });
    $(".link:first").trigger("click");
});

//When whole template is loaded, click the first one//
//Do not make global variable
//split whole JS code in two components
//