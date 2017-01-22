function divide(val1, val2) {
    if(val1 == 0) {
        return "ERROR";
    }

    return val1 / val2;
}

function client() {
    var res = divide(0, 100);
    if(res == "ERROR") {
        return "ERROR";
    }

    doSomething();
}

function aboveClient() {
    var res = client();
    if(res == "ERROR") {
        return "ERROR";
    }
}