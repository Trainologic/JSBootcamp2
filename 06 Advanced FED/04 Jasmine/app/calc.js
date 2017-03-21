function sum(nums) {
    var res = 0;

    for(var i=0; i<nums.length; i++) {
        if(typeof nums[i] != "number") {
            throw new Error("Only numbers are allowed");
        }

        res += nums[i];
    }

    return res;
}

module.exports = {
    sum: sum,
}
