var mainMenu = function() {
    var self = Ti.UI.createView({});
    var defaultFontSize = Ti.Platform.name === "android" ? 16 : 14;
    var tableData = [];
    for (var i = 1; i <= 10; i++) {
        var row = Ti.UI.createTableViewRow({
            selectedBackgroundColor: "white",
            rowIndex: i,
            height: 110
        });
        var label = Ti.UI.createLabel({
            color: "#576996",
            font: {
                fontFamily: "JACKPORT REGULAR NCV",
                fontSize: defaultFontSize + 16,
                fontWeight: "bold"
            },
            text: "Menu" + i,
            top: 6,
            width: 200,
            height: 110
        });
        row.add(label);
        tableData.push(row);
    }
    var tableView = Ti.UI.createTableView({
        backgroundColor: "white",
        separatorColor: "blue",
        data: tableData
    });
    var Content = __p.require("content");
    var content1 = Content("blue");
    var content2 = Content("red");
    var content3 = Content("green");
    tableView.addEventListener("click", function(e) {
        Ti.App.Properties.setBool("contentOpen", true);
        if (e.row.rowIndex === 1) {
            self.remove(tableView);
            self.add(content1);
            __log.info("Children :" + self.children[0]);
            __log.info(self.children[0]);
        } else if (e.row.rowIndex === 2) {
            self.remove(tableView);
            self.add(content2);
        } else if (e.row.rowIndex === 3) {
            self.remove(tableView);
            self.add(content3);
        } else {
            alert("Not implemented");
        }
    });
    __app.addEventListener("App", "removeView", function() {
        Ti.App.Properties.setBool("contentOpen", false);
        self.remove(content1);
        self.remove(content2);
        self.remove(content3);
        self.add(tableView);
        __log.info("Children :" + self.children[0]);
        __log.info("Children1 :" + self.children[1]);
    });
    self.add(tableView);
    return self;
};

module.exports = mainMenu;