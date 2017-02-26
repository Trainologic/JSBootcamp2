var HomeController = (function () {
    function HomeController(contactService) {
        this.contactService = contactService;
        //this.root = contactService.root;
    }
    Object.defineProperty(HomeController.prototype, "root", {
        get: function () {
            return this.contactService.root;
        },
        enumerable: true,
        configurable: true
    });
    HomeController.prototype.reset = function () {
        this.contactService.reset();
    };
    return HomeController;
}());
appModule.component("myHome", {
    controller: HomeController,
    templateUrl: "home.html",
    bindings: {}
});
//# sourceMappingURL=home.js.map