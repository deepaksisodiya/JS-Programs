/**
 * Created by Deepak Sisodiya on 04/12/14.
 */

App.bodyComponent = klass({
    templateId : "iframeTemplate",
    initialize : function($el) {
        this.$el = $el;
        var self = this;
        $.subscribe("navClick", function(e, data){
            self.render(data);
        });
    },
    render: function(data) {
        Util.loadTemplate(data, this.templateId, this.$el);
    }
});