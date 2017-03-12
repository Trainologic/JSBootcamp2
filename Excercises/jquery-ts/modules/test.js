"use strict";
function Test() {
    return 'test';
}
exports.Test = Test;
var self;
var lastId = 1;
var TestClass = (function () {
    function TestClass(name) {
        debugger;
        self = this;
        this.name = name + lastId++;
    }
    TestClass.prototype.getName = function () {
        return privateReturnName();
    };
    return TestClass;
}());
exports.TestClass = TestClass;
exports.testInstance = new TestClass('asdsa');
function privateReturnName() {
    return self.name;
}
//# sourceMappingURL=test.js.map