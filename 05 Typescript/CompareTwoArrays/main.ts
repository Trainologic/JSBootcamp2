var MAGIC_FIELD = "$$id";
var nextId = 1;

function buildMapCount(arr): any {
    var map = {};
    var id;

    for(var item of arr) {
        if(!item.hasOwnProperty(MAGIC_FIELD)) {
            id = nextId++;
            item[MAGIC_FIELD] = id;
        }
        else {
            id = item[MAGIC_FIELD];
        }

        if(!map[id]) {
            map[id] = 1;
        }
        else {
            map[id] = map[id] + 1;
        }

        //map[id] = (map[id] || 0) + 1;
    }

    return map;
}

function compare(arr1, arr2) {
    var map1 = buildMapCount(arr1);
    var map2 = buildMapCount(arr2);

    for(var key in map1) {
        if(map1[key]!=map2[key]) {
            return false;
        }
    }

    for(var key in map2) {
        if(map1[key]!=map2[key]) {
            return false;
        }
    }

    return true;
}

function runTest() {
    var ori = {id:1};
    var roni = {id:2};
    var arr1 = [null];
    var arr2 = [];

    console.log(compare(arr1, arr2));
}

runTest();