"use strict";
var app_module_1 = require("../app.module");
var FsService = (function () {
    function FsService() {
        this.root = {
            id: 1, name: 'root', children: [
                {
                    id: 2, name: 'sub1', children: [
                        { id: 4, name: 'sub3', children: [] },
                        { id: 5, name: 'file1', content: 'text' },
                    ]
                },
                { id: 3, name: 'sub2', children: [] },
            ]
        };
    }
    FsService.prototype.getRoot = function () {
        return this.root;
    };
    return FsService;
}());
exports.FsService = FsService;
app_module_1.AppModule.service('fsService', FsService);
//# sourceMappingURL=fs.service.js.map