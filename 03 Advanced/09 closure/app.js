function createCounter() {
    var val = 0;

    return {
        inc: function() {
            ++val;
        },
        dec: function() {
            --val;
        },
        get: function() {
            return val;
        }
    };
}

var x1 = createCounter();
x1.inc();
x1.dec();
console.log(x1.get());

var x2 = createCounter();
x2.inc();
x2.val = "dddd";
console.log(x2.get());
