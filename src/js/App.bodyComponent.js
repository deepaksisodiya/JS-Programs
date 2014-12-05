/**
 * Created by Deepak Sisodiya on 04/12/14.
 */

App.bodyComponent = BaseView.extend({
  templateId: "iframeTemplate",
  initialize: function($el) {
    this.$el = $el;
    var self = this;
    $.subscribe("navClick", function(e, data) {
      self.render(data);
    });
  },
  render: function(data) {
    this.loadTemplate(data, this.templateId, this.$el);
  }
});