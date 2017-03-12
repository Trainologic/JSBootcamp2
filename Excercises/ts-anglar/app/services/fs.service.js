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
        this.currentFolder = this.root;
    }
    FsService.prototype.subscribe = function (callback) {
        this.callbacks = this.callbacks || [];
        this.callbacks.push(callback);
    };
    FsService.prototype.fireCallbacks = function () {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback();
        }
    };
    FsService.prototype.getRoot = function () {
        return this.root;
    };
    FsService.prototype.getCurrentFolder = function () {
        return this.currentFolder;
    };
    FsService.prototype.setCurrentFolder = function (folder) {
        this.currentFolder = folder;
        this.fireCallbacks();
    };
    return FsService;
}());
exports.FsService = FsService;
app_module_1.AppModule.service('fsService', FsService);
//# sourceMappingURL=fs.service.js.map