class RouletteController {
    num: number;
    $interval;
    intervalId;

    constructor($interval) {
        this.$interval = $interval;
        this.num = 7;
    }

    run() {
        const tick = 50;
        const stopAfter = 3000;

        this.intervalId = this.$interval(()=> {
            this.num = Math.ceil(Math.random() * 100);


        }, tick, stopAfter/tick);
    }

    private stop() {
        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }
}

appModule.component("myRoulette", {
    controller: RouletteController,
    templateUrl: "roulette.html",
});