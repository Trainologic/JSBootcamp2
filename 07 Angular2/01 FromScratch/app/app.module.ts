import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ClockComponent} from "./clock.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ClockComponent,
    ]
})
export class AppModule {
}
