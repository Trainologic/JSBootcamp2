import { Component } from '@angular/core';
import {TooltipService} from "./tooltip.service";

@Component({
  selector: "my-tooltip",
  moduleId: module.id,
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.css"],
  host: {
    "[style.left]": "state.left",
    "[style.top]": "state.top",
    "[style.display]": "state.display"
  }
})
export class TooltipComponent {
  constructor(private tooltipService: TooltipService) {
  }

  get state() {
    return this.tooltipService;
  }
}
