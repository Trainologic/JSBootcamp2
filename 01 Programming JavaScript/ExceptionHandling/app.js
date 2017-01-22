function layer11() {
    console.log("layer11");
}

function layer10() {
    console.log("layer10");

    //throw Error("Oops");
}

function layer9() {
    try {
        console.log("layer9");

        layer10();
        layer11();
    }
    finally {
        console.log("layer9: Cleaning up resources");
    }
}

function layer8() {
    try {
        console.log("layer8");

        layer9();
    }
    catch(err) {
        console.log("layer8: error");
    }
}

layer8();
