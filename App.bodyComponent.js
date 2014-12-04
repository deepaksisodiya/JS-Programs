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
            $.subscribe("navClick", function(e, data){
                self.loadProgram(data);
            });
        },
        loadProgram : function(data) {
            App.common(data, "iframeTemplate", "section");
        }
    };
    return bodyComponent;
})();