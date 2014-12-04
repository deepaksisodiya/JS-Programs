/**
 * Created by Deepak Sisodiya on 04/12/14.
 */

App.bodyComponent = (function () {
    var bodyComponent = function ($el) {
        this.$el = $el;
        this.init();
    };
    bodyComponent.prototype = {
        constructor: bodyComponent,
        templateId : "iframeTemplate",
        init : function () {
            var self = this;
            $.subscribe("navClick", function(e, data){
                self.render(data);
            });
        },
        render: function(data) {
            App.loadTemplate(data, this.templateId, this.$el);
        }
    };
    return bodyComponent;
})();