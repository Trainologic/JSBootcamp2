import {appModule} from "./app.module";

export class ClockComponent {
    time: Date;

    constructor($interval) {
        $interval(() => {
            this.time = new Date();
        }, 1000);
    }
}

appModule.component("clock", {
    controller: ClockComponent,
    templateUrl: "app/clock.html",
});
