import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";
import {TooltipService} from "./tooltip.service";

@Directive({
    selector: "[tooltip]"
})
export class TooltipDirective {
    @Input("tooltip") text: string;

    timer: any;

    constructor(private elementRef: ElementRef,
                private tooltipService: TooltipService) {
        console.log("ctor", elementRef);

        // elementRef.nativeElement.addEventListener("mouseenter", ()=> {
        //     this.onMouseEnter();
        // });
    }

    ngOnInit() {
        console.log("onInit", this.text);
    }

    @HostListener("mouseenter")
    onMouseEnter() {
        console.log("onMouseEnter");

        this.resetTimer();
    }

    @HostListener("mousemove")
    onMouseMove() {
        console.log("onMouseMove");

        this.resetTimer();
    }

    @HostListener("mouseleave")
    onMouseLeave() {
        console.log("onMouseLeave");

        this.stopTimer();
    }

    resetTimer() {
        this.stopTimer();

        this.timer = setTimeout(()=> {
            this.tooltipService.show(this.elementRef, this.text);
        }, 700);
    }

    stopTimer() {
        if(this.timer) {
            clearTimeout(this.timer);
            this.timer = null;

            this.tooltipService.hide();
        }
    }
}

