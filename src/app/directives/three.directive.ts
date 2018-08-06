import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  ViewContainerRef,
  TemplateRef,
  ElementRef
} from "@angular/core";

//attribute selector
@Directive({
  selector: "[three]"
})
export class ThreeDirective {
  @Input("threeFrom")
  set threeFrom({ one, two, three }) {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.template, {
      $implicit: one
    });
    this.viewContainerRef.createEmbeddedView(this.template, {
      $implicit: two
    });
    this.viewContainerRef.createEmbeddedView(this.template, {
      $implicit: three
    });
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
    private el: ElementRef
  ) {
    console.log(el.nativeElement);
  }

  // ngAfterViewInit() {
  //   this.viewContainerRef.createEmbeddedView(this.template, {
  //     $implicit: "Awesome"
  //   });
  // }
}
