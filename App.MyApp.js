/**
 * Created by Deepak Sisodiya on 05/12/14.
 */



App.MyApp = (function () {
    var MyApp = function (id) {
        this.$el = $("#" + id);
        this.init();
    };
    MyApp.prototype = {
        constructor: MyApp,
        templateId : "myAppTemplate",
        init : function () {
            this.render();
            new App.navComponent("nav1");
            new App.bodyComponent("section1");
        },
        render: function() {
            App.loadTemplate({}, this.templateId, this.$el);
        }
    };
    return MyApp;
})();