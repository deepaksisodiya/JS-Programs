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
                $(".link").on("click", function () {
                    var index = this.getAttribute("data-index");
                    $.publish("navClick", dataConfig[index]);
                });
                $(".link:first").trigger("click");
            });
        }
    };
    return navComponent;
})();