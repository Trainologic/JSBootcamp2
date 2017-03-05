class ListController {
    constructor(contactService) {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        this.contactService = contactService;
    }

    select(contact) {
        this.contactService.activate(contact);

        //this.onSelectionChanged({x: contact});
    }

    // delete(contact) {
    //     this.onContactDeleted();
    // }
}

appModule.component("myList", {
    controller: ListController,
    templateUrl: "list.component.html",
    // bindings: {
    //     onSelectionChanged: "&",
    //     onContactDeleted: "&"
    // }
});
