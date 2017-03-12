class HomeController {
    constructor() {
        this.num = 0;
    }

    inc() {
        ++this.num;
    }
}

appModule.component("myHome", {
    controller: HomeController,
    template: `<h1>Hello</h1>
<input ng-model="$ctrl.num">
<button ng-click="$ctrl.inc()">Inc</button>`
});
