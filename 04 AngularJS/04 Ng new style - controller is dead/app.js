var appModule = angular.module("myApp", []);

function HomeCtrl() {
    this.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ];
}

HomeCtrl.prototype.add = function() {
    if(!this.name) {
        return;
    }

    var contact = {id:-1, name: this.name};
    this.contacts.push(contact);
}


appModule.component("myHome", {
    controller: HomeCtrl,
    template: `<div>
        <div>
            <span>Name:</span>
            <input ng-model="$ctrl.name">
        </div>

        <div>
            <button ng-click="$ctrl.add()">Add</button>
        </div>

        <ul>
            <li ng-repeat="contact in $ctrl.contacts">
                <span>{{contact.name}}</span>
            </li>
        </ul>
    </div>`
});

//appModule.controller("HomeCtrl", );

