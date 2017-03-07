"use strict";
var app_module_1 = require("../../app.module");
var ContentComponent = (function () {
    function ContentComponent($rootScope) {
        this.$rootScope = $rootScope;
    }
    ContentComponent.prototype.showContextMenu = function (event, child) {
        child = child || this.folder;
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: child.id, type: child.children ? 'folder' : 'file' });
    };
    return ContentComponent;
}());
app_module_1.AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ['$rootScope', ContentComponent],
    bindings: {
        folder: '<'
    }
});
//# sourceMappingURL=content.component.js.map