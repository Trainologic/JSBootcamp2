const {sum} = require("./calc");

describe("sum", function() {
    it("returns the correct sum", function() {
        var actual = sum([1,2,3,4]);

        expect(actual).toBe(10);
    });

    it("Does not allows for values that are not number", function() {
        expect(()=> {
            sum(["abc", 1]);
        }).toThrow();
    });
});
