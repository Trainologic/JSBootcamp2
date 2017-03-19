import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {BasicComponent} from "./basic.component";

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: "basic",
                component: BasicComponent
            }
        ]
    },
    { path: 'about', component: AboutComponent },
];
