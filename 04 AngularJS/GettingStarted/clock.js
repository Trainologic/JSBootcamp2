function ClockController ($interval) {
    this.time = new Date();

    $interval(() => {
        this.time = new Date();
    }, 1000);
}

appModule.component("clock", {
    controller: ClockController,
    templateUrl: "clock.html",
});
