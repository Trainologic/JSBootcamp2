import * as angular from "angular";
import {appModule} from "./app.module";
import {ClockComponent} from "./clock.component";

console.log("main");

appModule
ClockComponent;

angular.bootstrap(document.getElementById("html"), [appModule.name]);