"use strict";
var app_module_1 = require("../../app.module");
var fs_service_1 = require("../../../app/services/fs.service");
fs_service_1.FsService;
var FsAppComponent = (function () {
    function FsAppComponent(fsService) {
        this.fsService = fsService;
        this.root = fsService.getRoot();
    }
    return FsAppComponent;
}());
app_module_1.AppModule.component('fsApp', {
    templateUrl: 'app/components/fsapp/fsapp.template.html',
    controller: ['fsService', FsAppComponent],
    bindings: {},
});
//# sourceMappingURL=fsapp.component.js.map