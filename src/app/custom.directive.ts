import{  ElementRef,Directive, HostListener, HostBinding} from'@angular/core'


@Directive({
    selector:'[color]'
})


export class CustomDirective{
     constructor(e1:ElementRef){
        e1.nativeElement.style.background='red';
        e1.nativeElement.style.padding="10px";
        e1.nativeElement.style.border="1px solid #111";
        e1.nativeElement.style.borderRadius="5px";
        e1.nativeElement.style.color="white";
    
    
     }
     @HostListener("click") clickEvent(){
         alert("hello hist");

     }
     @HostBinding('style.background') background="green";

      @HostListener("mouseenter") mouseenter(){
          console.log("moudse enter");
          this.background="red";
      }

      @HostListener("mouseleave") mouseleave(){
          console.log("mouse leave")
          this.background="yellow";
      }
}