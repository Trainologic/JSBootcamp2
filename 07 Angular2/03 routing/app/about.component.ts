import {Component} from "@angular/core";

@Component({
    selector: "my-about",
    template: "<h1>About</h1>"
})
export class AboutComponent {
    constructor() {
        console.log("AboutComponent.ctor");
    }

    ngOnDestroy() {
        console.log("AboutComponent.ngOnDestroy");
    }

}
