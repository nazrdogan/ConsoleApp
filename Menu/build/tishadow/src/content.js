var menu1 = function(color) {
    var Navigation = __p.require("navigation");
    var navigation = Navigation();
    var self = Ti.UI.createView({
        backgroundColor: color
    });
    self.add(navigation);
    return self;
};

module.exports = menu1;