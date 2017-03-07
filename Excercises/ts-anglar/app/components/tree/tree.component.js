"use strict";
var app_module_1 = require("../../app.module");
var TreeComponent = (function () {
    function TreeComponent($rootScope) {
        this.$rootScope = $rootScope;
        this.showChildren = false;
    }
    TreeComponent.prototype.toggleChildren = function () {
        this.showChildren = !this.showChildren;
    };
    TreeComponent.prototype.showContextMenu = function (event) {
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
    };
    return TreeComponent;
}());
app_module_1.AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: ['$rootScope', TreeComponent],
    bindings: {
        folder: '<'
    }
});
//# sourceMappingURL=tree.component.js.map