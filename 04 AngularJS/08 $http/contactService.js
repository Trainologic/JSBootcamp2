var ContactService = (function () {
    function ContactService($http) {
        this.$http = $http;
    }
    ContactService.prototype.getAllContacts = function () {
        return this.$http.get("contacts.json").then(function (httpResponse) {
            return httpResponse.data;
        });
    };
    return ContactService;
}());
appModule.service("contactService", ContactService);
//# sourceMappingURL=contactService.js.map