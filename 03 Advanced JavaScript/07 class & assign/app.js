function g(num, num2) {
    console.log("g", this, num, num2);
}

//g(5);

g.call("x", 1, 2);

g.apply("x", [1, 2]);


