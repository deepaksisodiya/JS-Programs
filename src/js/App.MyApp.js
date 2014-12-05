/**
 * Created by Deepak Sisodiya on 05/12/14.
 */


App.MyApp = BaseView.extend({
  templateId: "myAppTemplate",
  initialize: function($el) {
    this.$el = $el;
    this.render();
    new App.navComponent(this.$("#nav1"));
    new App.bodyComponent(this.$("#section1"));
  },
  render: function() {
    this.loadTemplate({}, this.templateId, this.$el);
  }
});
