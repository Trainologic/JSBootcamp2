class ContactService {
    constructor() {
        this.current = null;
    }

    activate(contact) {
        this.current = contact;

        console.log("Contact activated: ", contact);
    }
}

appModule.service("contactService", ContactService);
