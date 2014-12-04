/**
 * Created by Deepak Sisodiya on 04/12/14.
 */

App.main = function() {
    var v = new App.navComponent("nav1");
    v.init();

    var u = new App.navComponent("nav2");
    u.init();

    var b = new App.bodyComponent("section1");
    b.init();
};

App.main();