import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
 


  constructor(public ElementRef: undefined) { }
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
