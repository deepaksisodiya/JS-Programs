/**
 * Created by Deepak Sisodiya on 05/12/14.
 */


App.MyApp = klass({
    templateId : "myAppTemplate",
    initialize : function ($el) {
        this.$el = $el;
        this.render();
        new App.navComponent(this.$el.find("#nav1"));
        new App.bodyComponent(this.$el.find("#section1"));
    },
    render: function() {
        Util.loadTemplate({}, this.templateId, this.$el);
    }
});