import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = "white";

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseenter') mouseHover(eventData: Event){
    this.backgroundColor = "green;"
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.backgroundColor = "white;"
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white')
  }
}
