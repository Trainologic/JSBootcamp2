function create(values) {
    ensureArray(values);

    return values;
}

function get(arr, index) {
    ensureArray(arr);
    ensureType(index, "number");
    ensureIndexInRange(arr, index);

    return arr[index];
}

function set(arr, index, value) {
    ensureArray(arr);
    ensureType(index, "number");
    ensureIndexInRange(arr, index);

    arr[index] = value;
}

function add(arr, value) {
    ensureArray(arr);

    arr.push(value);
}

function ensureArray(arr) {
    if(!Array.isArray(arr)) {
        throw Error("Specified parameter is not an array");
    }
}

function ensureType(val, type) {
    if(typeof val != type) {
        throw Error("Test failed");
    }
}

function ensureIndexInRange(arr, index) {
    if(index<0 || index>=arr.length) {
        throw Error("index not in range");
    }
}

// exports.create = create;
// exports.add = add;
// exports.get = get;
// exports.set = set;

module.exports = {
    create: create,
    add: add,
    get: get,
    set: set,
};

// module.exports = {
//     create,
//     add,
//     get,
//     set,
// };
