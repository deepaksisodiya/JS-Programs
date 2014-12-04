/**
 * Created by Deepak Sisodiya on 04/12/14.
 */


App.navComponent = (function () {
    var navComponent = function () {

    };
    navComponent.prototype = {
        constructor: navComponent,
        init : function () {
            App.getRequest("config.json", function (dataConfig) {
                App.common(dataConfig, "navBar", "nav");
                $(".link").click(function () {
                    var index = this.getAttribute("data-index");
                    App.bodyComponent.prototype.loadProgram(index);
                });
            });
        }
    };
    return navComponent;
})();