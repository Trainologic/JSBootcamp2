class ContentController {
    constructor(contactService) {
        this.contactService = contactService;
    }

    get contact() {
        return this.contactService.current;
    }
}

appModule.component("myContent", {
    controller: ContentController,
    templateUrl: "content.component.html",
    // bindings: {
    //     "contact": "<",
    // }
});
