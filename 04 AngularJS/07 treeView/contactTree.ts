class ContactTreeController {
    constructor() {
    }

    toggle(item, $event) {
        if(!item.items) {
            return;
        }

        //console.log("EXPANDING items");

        item.expanded = !item.expanded;

        $event.stopPropagation();
    }
}

appModule.component("myContactTree", {
    controller: ContactTreeController,
    templateUrl: "contactTree.html",
    bindings: {
        group: "<",
    }
});