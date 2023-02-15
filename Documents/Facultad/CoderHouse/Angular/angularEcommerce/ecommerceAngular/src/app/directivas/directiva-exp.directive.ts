import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaExp]'
})
export class DirectivaExpDirective {
@Input('appDirectivaExp')precio!:number;
  constructor(private element : ElementRef , private render :Renderer2) {

   }
   ngOnInit(): void{
    this.render.addClass(this.element.nativeElement,this.precio >60 ? 'bg-danger' : 'bg-success');
   }

}
