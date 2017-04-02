import {ElementRef} from "@angular/core";
export class TooltipService {
    isVisible: boolean;
    text: string;
    left: number;
    top: number;

    constructor() {
    }

    show(parent: ElementRef, text: string) {
        this.text = text;
        this.isVisible = true;

        const rect = parent.nativeElement.getBoundingClientRect();
        console.log(rect);

        this.left = rect.left;
        this.top = rect.bottom + 5;
    }

    hide() {
        this.text = "";
        this.isVisible = false;
    }

    get display(): string {
        return this.isVisible ? "block" : "none";
    }
}
