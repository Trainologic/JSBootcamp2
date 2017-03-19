"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var basic_component_1 = require("./basic.component");
exports.routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: "basic",
                component: basic_component_1.BasicComponent
            }
        ]
    },
    { path: 'about', component: about_component_1.AboutComponent },
];
//# sourceMappingURL=routes.js.map