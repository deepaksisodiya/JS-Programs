/**
 * Created by Deepak Sisodiya on 04/12/14.
 */


App.navComponent = (function () {
    var navComponent = function (id) {
        this.$el = $("#" + id);
        this.init();
    };
    navComponent.prototype = {
        constructor: navComponent,
        templateId : "navBar",
        init : function () {
            var self = this;
            App.getRequest("config.json", function (dataConfig) {
               self.startModule(dataConfig);
            });
        },
        startModule : function (dataConfig) {
            this.dataConfig = dataConfig;
            this.render();
            this.addEvents();
        },
        render: function () {
            App.loadTemplate(this.dataConfig, this.templateId, this.$el);
        },
        addEvents: function () {
            var self = this;
            this.$el.find(".link").on("click", function () {
                var index = this.getAttribute("data-index");
                $.publish("navClick", self.dataConfig[index]);
            });
            this.$el.find(".link:first").trigger("click");
        }
    };
    return navComponent;
})();