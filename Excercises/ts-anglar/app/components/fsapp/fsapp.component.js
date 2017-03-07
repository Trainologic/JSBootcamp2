"use strict";
var app_module_1 = require("../../app.module");
var fs_service_1 = require("../../../app/services/fs.service");
fs_service_1.FsService;
var FsAppComponent = (function () {
    function FsAppComponent(fsService, $scope) {
        var _this = this;
        this.fsService = fsService;
        this.$scope = $scope;
        this.fsService.subscribe(function () {
            _this.currentFolder = _this.fsService.getCurrentFolder();
            _this.$scope.$applyAsync();
        });
        this.root = fsService.getRoot();
        this.currentFolder = fsService.getCurrentFolder();
    }
    return FsAppComponent;
}());
app_module_1.AppModule.component('fsApp', {
    templateUrl: 'app/components/fsapp/fsapp.template.html',
    controller: ['fsService', '$scope', FsAppComponent],
    bindings: {},
});
//# sourceMappingURL=fsapp.component.js.map