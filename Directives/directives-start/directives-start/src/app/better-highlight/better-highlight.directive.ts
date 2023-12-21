import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseenter') mouseHover(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }
  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white')
  }
}
