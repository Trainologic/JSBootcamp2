function ClockController ($interval) {
    this.time = new Date();
    this.name = "XXX";

    $interval(() => {
        this.time = new Date();
    }, 1000);
}

ClockController.prototype.show = function() {
    //this.name = "YYY";
    alert("Hello " + this.name);
}

appModule.component("clock", {
    controller: ClockController,
    templateUrl: "clock.html",
});
