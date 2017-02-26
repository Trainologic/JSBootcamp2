var ContactTreeController = (function () {
    function ContactTreeController() {
    }
    ContactTreeController.prototype.toggle = function (item, $event) {
        if (!item.items) {
            return;
        }
        //console.log("EXPANDING items");
        item.expanded = !item.expanded;
        $event.stopPropagation();
    };
    return ContactTreeController;
}());
appModule.component("myContactTree", {
    controller: ContactTreeController,
    templateUrl: "contactTree.html",
    bindings: {
        group: "<",
    }
});
//# sourceMappingURL=contactTree.js.map