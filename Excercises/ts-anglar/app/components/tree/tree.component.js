"use strict";
var app_module_1 = require("../../app.module");
var TreeComponent = (function () {
    function TreeComponent($rootScope, fsService) {
        this.$rootScope = $rootScope;
        this.fsService = fsService;
        this.showChildren = false;
    }
    TreeComponent.prototype.toggleChildren = function () {
        this.showChildren = !this.showChildren;
        this.fsService.setCurrentFolder(this.folder);
    };
    TreeComponent.prototype.showContextMenu = function (event) {
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
    };
    return TreeComponent;
}());
app_module_1.AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: ['$rootScope', 'fsService', TreeComponent],
    bindings: {
        folder: '<',
    }
});
//# sourceMappingURL=tree.component.js.map