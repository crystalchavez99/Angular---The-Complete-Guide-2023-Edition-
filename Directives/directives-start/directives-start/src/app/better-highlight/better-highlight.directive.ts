import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = "white";
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseenter') mouseHover(eventData: Event){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor)
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.backgroundColor = "white";
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white')
  }
}
