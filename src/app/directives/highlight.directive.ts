import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
    selector : "[app-highlight]"
})
export class HighlightDirective{

    @HostBinding("style.backgroundColor") 
    bgColor : any;

    @Input("myColor") myColor : string;

    @HostListener("mouseenter") 
    mouseeneter(){
        this.elementRef.nativeElement.style.backgroundColor = this.myColor;
        // this.bgColor = this.myColor;
    }
    @HostListener("mouseleave") 
    mouseleave(){
        this.elementRef.nativeElement.style.backgroundColor = "transparent";
        // this.bgColor = "transparent";
    }
    constructor(private elementRef : ElementRef){
        // console.log(this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
     }
}