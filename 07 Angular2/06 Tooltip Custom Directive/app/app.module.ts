import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './components/app.component';
import {ClockComponent} from "./components/clock.component";
import {TooltipDirective} from "./tooltip/tooltip.directive";
import {TooltipComponent} from "./tooltip/tooltip.component";
import {TooltipService} from "./tooltip/tooltip.service";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ClockComponent,
        TooltipDirective,
        TooltipComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
        TooltipService,
    ]
})
export class AppModule {
}
