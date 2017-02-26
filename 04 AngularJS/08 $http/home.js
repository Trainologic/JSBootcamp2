var HomeController = (function () {
    function HomeController(contactService) {
        this.contactService = contactService;
    }
    HomeController.prototype.getData = function () {
        var _this = this;
        this.contactService.getAllContacts().then(function (contacts) {
            _this.contacts = contacts;
        });
    };
    return HomeController;
}());
appModule.component("myHome", {
    controller: HomeController,
    templateUrl: "home.html",
    bindings: {}
});
//# sourceMappingURL=home.js.map