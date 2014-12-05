/**
 * Created by Deepak Sisodiya on 04/12/14.
 */


App.navComponent = (function () {
    var navComponent = function ($el) {
        this.$el = $el;
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
            this.$el.find(".link").eq(this.getIndexToLoad()).trigger("click");
        },
        getIndexToLoad: function () {
            var location = window.location.hash;
            if(location === "") {
                return 0;
            }else {
                var str = location.slice(1);
                var dataConfig = this.dataConfig;
                var dataConfigLength = dataConfig.length
                for(var i=0; i < dataConfigLength; i=i+1) {
                    if(dataConfig[i].jsFiddleUrl === str) {
                        return i;
                    }
                }
            }
        }
    };
    return navComponent;
})();