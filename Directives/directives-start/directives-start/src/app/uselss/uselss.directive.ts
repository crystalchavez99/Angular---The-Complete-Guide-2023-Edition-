import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUselss]'
})
export class UselssDirective {
  @Input() set appUselss(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
