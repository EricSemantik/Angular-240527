import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bg-black]'
})
export class BackGroundBlackDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
    console.log(renderer);


    this.renderer.addClass(el.nativeElement, "bgBlack");
    // this.renderer.setStyle(el.nativeElement, "background-color", "black")
    // this.renderer.setStyle(el.nativeElement, "color", "white")
  }

}
