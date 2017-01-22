const safeArray = require("./safeArray");
const create = safeArray.create;
const add = safeArray.add;
const get = safeArray.get;
const set = safeArray.set;

// const {create, add, get, set} = require("./safeArray");

runTests();

function createReturnsTheRightArray() {
    var arr = create([1,2,3]);
    if(!arrayEquals(arr, [1,2,3])) {
        throw Error("Test failed");
    }
}

function addAddsNewItemAndLengthChanges() {
    var arr = create([1,2,3]);
    add(arr, 10);

    assert(arr[3]==10);
    assert(arr.length == 4);
    if(!arrayEquals(arr, [1,2,3,10])) {
        throw Error("Test failed");
    }
}

function getMethodThrowsErrorWhenIndexIsOutofRange() {
    var pass = true;
    var arr = create([1,2,3]);

    try {
        get(arr, -1);
        pass = false;
    }
    catch(err) {
        //
        //  Should throw exception
        //
    }

    get(arr, 0);

    get(arr, 2);

    try {
        get(arr, 3);
        pass = false;
    }
    catch(err) {
    }

    if(!pass) {
        throw Error("Test failed");
    }
}

function runTests() {
    try {
        createReturnsTheRightArray();
        addAddsNewItemAndLengthChanges();
        getMethodThrowsErrorWhenIndexIsOutofRange();

        console.log("PASS");
    }
    catch(err) {
        console.error(err);
        console.log("FAILED");
    }
}

function arrayEquals(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }

    for(var i=0; i<arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

function assert(val) {
    if(!val) {
        throw Error("test failed");
    }
}
