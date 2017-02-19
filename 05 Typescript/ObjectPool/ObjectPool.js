var MAGIC_FIELD = "$$objectpool$$";
var ObjectPool = (function () {
    function ObjectPool() {
        this.objects = [];
    }
    ObjectPool.prototype.add = function (obj) {
        if (this.contains(obj)) {
            return;
        }
        obj[MAGIC_FIELD] = true;
        this.objects.push(obj);
    };
    ObjectPool.prototype.get = function () {
        var res = this.objects.pop();
        if (!res) {
            return null;
        }
        delete res[MAGIC_FIELD];
        return res;
    };
    ObjectPool.prototype.contains = function (obj) {
        if (obj.hasOwnProperty(MAGIC_FIELD)) {
            return true;
        }
        return false;
    };
    return ObjectPool;
}());
//# sourceMappingURL=ObjectPool.js.map