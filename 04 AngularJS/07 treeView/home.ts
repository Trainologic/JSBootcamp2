class HomeController {
    constructor(private contactService: ContactService) {
        //this.root = contactService.root;
    }

    get root() {
        return this.contactService.root;
    }

    reset() {
        this.contactService.reset();
    }
}

appModule.component("myHome", {
    controller: HomeController,
    templateUrl: "home.html",
    bindings: {
    }
});