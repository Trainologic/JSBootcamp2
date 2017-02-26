class ContactService {
    constructor(private $http: ng.IHttpService) {
    }

    getAllContacts(): ng.IPromise<Contact[]> {
        return this.$http.get("contacts.json").then(httpResponse => {
            return httpResponse.data;
        });
    }
}

interface Contact {
    id: number;
    name: string;
    email?: string;
}

appModule.service("contactService", ContactService);