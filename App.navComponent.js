/**
 * Created by Deepak Sisodiya on 04/12/14.
 */

App.navComponent = klass({
    events: {
        "click .link": "onLinkClick"
    },
    templateId : "navBar",
    initialize : function($el) {
       this.$el = $el;
        var self = this;
        Util.getRequest("config.json", function (dataConfig) {
            self.startModule(dataConfig);
        });
    },
    startModule : function (dataConfig) {
        this.dataConfig = dataConfig;
        this.render();
        Util.addEvents(this);
        this.$el.find(".link").eq(this.getIndexToLoad()).trigger("click");
    },
    render: function () {
        Util.loadTemplate(this.dataConfig, this.templateId, this.$el);
    },
    onLinkClick: function (e, target, dataSet) {
        var index = dataSet.index;
        $.publish("navClick", this.dataConfig[index]);
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
            return 0;
        }
    }
});