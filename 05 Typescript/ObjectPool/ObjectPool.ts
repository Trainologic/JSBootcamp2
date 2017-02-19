var MAGIC_FIELD = "$$objectpool$$";

class ObjectPool {
    objects: any[];

    constructor() {
        this.objects = [];
    }

    add(obj) {
        if(this.contains(obj)) {
            return;
        }

        obj[MAGIC_FIELD] = true;

        this.objects.push(obj);
    }

    get() {
        var res = this.objects.pop();
        if(!res) {
            return null;
        }

        delete res[MAGIC_FIELD];

        return res;
    }

    contains(obj): boolean {
        if(obj.hasOwnProperty(MAGIC_FIELD)) {
            return true;
        }

        return false;
    }
}
