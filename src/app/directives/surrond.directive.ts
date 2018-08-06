import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  ViewContainerRef,
  TemplateRef,
  ElementRef
} from "@angular/core";
import { TemplateService } from "../services/template.service";

//attribute selector
@Directive({
  selector: "[surround]"
})
export class SurrroundDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
    private service: TemplateService
  ) {
    //console.log(el.nativeElement);
  }

  ngAfterViewInit() {
    console.log(this.service.templates.get("header"));
    this.viewContainerRef.createEmbeddedView(
      this.service.templates.get("header")
    );
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.createEmbeddedView(
      this.service.templates.get("footer")
    );
  }
}
