class HomeController {
    contacts: Contact[];

    constructor(private contactService: ContactService) {
    }

    getData() {
        this.contactService.getAllContacts().then(contacts => {
            this.contacts = contacts;
        });
    }
}

appModule.component("myHome", {
    controller: HomeController,
    templateUrl: "home.html",
    bindings: {
    }
});