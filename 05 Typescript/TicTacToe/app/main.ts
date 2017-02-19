import * as angular from "angular";
import {appModule} from "./app.module";
import {BoardComponent} from "./board.component";

console.log("main");

appModule
BoardComponent;

angular.bootstrap(document.getElementById("html"), [appModule.name]);