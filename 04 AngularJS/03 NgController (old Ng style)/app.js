var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope) {
    $scope.add = function() {
        if(!$scope.name) {
            return;
        }

        var contact = {id:-1, name: $scope.name};
        $scope.contacts.push(contact);
    }

    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ];
});

