class ContactService {
    root;

    constructor() {
        this.root = {
            name: "Friends",
            items: [
                {name: "Ori"},
                {name: "Roni"},
                {
                    name: "Best Friends",
                    items: [
                        {name: "Udi"},
                        {
                            name: "Old Friends",
                            items: [
                                {name: "Itay"}
                            ]
                        }
                    ]
                }
            ]
        }
    }

    reset() {
        this.root = null;
    }
}

appModule.service("contactService", ContactService);