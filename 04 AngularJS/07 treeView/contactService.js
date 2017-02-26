var ContactService = (function () {
    function ContactService() {
        this.root = {
            name: "Friends",
            items: [
                { name: "Ori" },
                { name: "Roni" },
                {
                    name: "Best Friends",
                    items: [
                        { name: "Udi" },
                        {
                            name: "Old Friends",
                            items: [
                                { name: "Itay" }
                            ]
                        }
                    ]
                }
            ]
        };
    }
    ContactService.prototype.reset = function () {
        this.root = null;
    };
    return ContactService;
}());
appModule.service("contactService", ContactService);
//# sourceMappingURL=contactService.js.map