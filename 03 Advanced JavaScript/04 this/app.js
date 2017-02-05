function g() {
    console.log(this == window);
}

var x = {
    id: 1,
    name: "Ori",
    func: function() {
        console.log("func", this);

        console.log(this.id);
    }
};

//g();
//window.g();
x.func();

var h = x.func;
h();

h.call("abc");

h.call(42);

h.call(h);

function fff() {
    function g() {
        this
    }

    var obj = {};
    obj.f = g;
    obj.f();

    g();
}

fff();