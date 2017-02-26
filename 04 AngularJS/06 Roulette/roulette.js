var RouletteController = (function () {
    function RouletteController($interval) {
        this.$interval = $interval;
        this.num = 7;
    }
    RouletteController.prototype.run = function () {
        var _this = this;
        var tick = 50;
        var stopAfter = 3000;
        this.intervalId = this.$interval(function () {
            _this.num = Math.ceil(Math.random() * 100);
        }, tick, stopAfter / tick);
    };
    RouletteController.prototype.stop = function () {
        if (this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    };
    return RouletteController;
}());
appModule.component("myRoulette", {
    controller: RouletteController,
    templateUrl: "roulette.html",
});
//# sourceMappingURL=roulette.js.map