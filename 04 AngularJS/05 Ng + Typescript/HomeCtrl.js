var HomeCtrl = (function () {
    function HomeCtrl() {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
            { id: 3, name: "Udi" },
        ];
    }
    HomeCtrl.prototype.add = function () {
        if (!this.name) {
            return;
        }
        var contact = { id: -1, name: this.name };
        this.contacts.push(contact);
    };
    return HomeCtrl;
}());
appModule.component("myHome", {
    controller: HomeCtrl,
    template: "<div>\n        <div>\n            <span>Name:</span>\n            <input ng-model=\"$ctrl.name\">\n        </div>\n\n        <div>\n            <button ng-click=\"$ctrl.add()\">Add</button>\n        </div>\n\n        <ul>\n            <li ng-repeat=\"contact in $ctrl.contacts\">\n                <span>{{contact.name}}</span>\n            </li>\n        </ul>\n    </div>"
});
//# sourceMappingURL=HomeCtrl.js.map