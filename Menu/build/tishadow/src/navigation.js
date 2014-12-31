var navigation = function() {
    var self = Ti.UI.createView({
        width: "100%",
        height: "80",
        top: 0,
        backgroundColor: "grey"
    });
    var backbutton = Ti.UI.createButton({
        backgroundImage: __p.file("back.png"),
        left: 10
    });
    self.add(backbutton);
    backbutton.addEventListener("touchstart", function() {
        Ti.App.Properties.setBool("contentOpen", false);
        __app.fireEvent("App", "removeView");
    });
    return self;
};

module.exports = navigation;