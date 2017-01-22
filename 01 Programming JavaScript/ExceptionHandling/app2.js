var arr = [1,2,3,4];

function presentation_PowerBy2() {
    try {
        powerBy2();
    }
    catch(err) {
        console.error("Failed: " + err.message);
    }
}

function powerBy2() {
    var clone = arr.concat([]);

    for(var i=0; i<clone.length; i++) {
        clone[i] = map(clone[i]);
    }

    arr = clone;
}

function map(val) {
    if(val == 3) {
        throw Error("oops");
    }

    return val * val;
}

