/**
 * Created by Deepak Sisodiya on 05/12/14.
 */



App.MyApp = (function () {
    var MyApp = function ($el) {
        this.$el = $el;
        this.init();
    };
    MyApp.prototype = {
        constructor: MyApp,
        templateId : "myAppTemplate",
        init : function () {
            this.render();
            new App.navComponent(this.$el.find("#nav1"));
            new App.bodyComponent(this.$el.find("#section1"));
        },
        render: function() {
            Util.loadTemplate({}, this.templateId, this.$el);
        }
    };
    return MyApp;
})();