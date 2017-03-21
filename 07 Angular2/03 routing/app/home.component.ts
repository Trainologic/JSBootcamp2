import {Component} from "@angular/core";

@Component({
    selector: "my-home",
    templateUrl: "app/home.component.html"
})
export class HomeComponent {
    constructor() {
        console.log("HomeComponent.ctor");
    }

    ngOnDestroy() {
        console.log("HomeComponent.ngOnDestroy");
    }
}
