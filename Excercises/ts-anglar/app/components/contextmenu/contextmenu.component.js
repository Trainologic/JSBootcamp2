"use strict";
var app_module_1 = require("../../app.module");
var ContextMenuComponent = (function () {
    function ContextMenuComponent($scope) {
        var _this = this;
        this.$scope = $scope;
        $scope.$on('showContextMenu', function (event, obj) {
            _this.type = obj.type;
            _this.id = obj.id;
            _this.posX = obj.event.clientX;
            _this.posY = obj.event.clientY;
        });
    }
    ContextMenuComponent.prototype.hideMe = function (event) {
        if (event.target.classList.contains('context-bg')) {
            this.id = null;
        }
    };
    return ContextMenuComponent;
}());
app_module_1.AppModule.component('contextMenu', {
    templateUrl: 'app/components/contextmenu/contextmenu.template.html',
    controller: ['$scope', ContextMenuComponent]
});
//# sourceMappingURL=contextmenu.component.js.map