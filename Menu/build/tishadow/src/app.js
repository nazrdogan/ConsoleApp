(function() {
    Ti.App.Properties.setBool("contentOpen", false);
    var win = __ui.createWindow({
        exitOnClose: true,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        navBarHidden: true
    });
    var Main = __p.require("mainmenu");
    var menu = Main();
    win.add(menu);
    win.open();
    win.addEventListener("androidback", function() {
        if (Ti.App.Properties.getBool("contentOpen") === true) {
            alert("Test");
            __app.fireEvent("App", "removeView");
            Ti.App.Properties.setBool("contentOpen", false);
        } else {
            win.close();
        }
    });
})();