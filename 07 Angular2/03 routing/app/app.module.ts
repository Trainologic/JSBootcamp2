import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ClockComponent} from "./clock.component";
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {routes} from "./routes";
import {BasicComponent} from "./basic.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,

        //  common components
        ClockComponent,

        //  top level views
        HomeComponent,
        AboutComponent,
        BasicComponent,
    ]
})
export class AppModule {
}
