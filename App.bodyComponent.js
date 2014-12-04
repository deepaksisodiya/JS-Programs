/**
 * Created by Deepak Sisodiya on 04/12/14.
 */

App.bodyComponent = (function () {
    var bodyComponent = function () {

    };
    bodyComponent.prototype = {
        constructor: bodyComponent,
        init : function () {
            var self = this;
            App.getRequest("config.json", function (dataConfig) {
                self.loadProgram(0);
            });
        },
        loadProgram : function(index) {
            App.common(App.data[index], "iframeTemplate", "section");
        }
    };
    return bodyComponent;
})();


// App.main inirialize both component
// remove App.common and put inside each js
// 2 nav bar