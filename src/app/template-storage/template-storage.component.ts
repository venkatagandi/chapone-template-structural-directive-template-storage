import { Component, OnInit, ViewChild } from "@angular/core";
import { TemplateService } from "../services/template.service";

@Component({
  selector: "template-storage",
  templateUrl: "./template-storage.component.html",
  styleUrls: ["./template-storage.component.scss"]
})
export class TemplateStorageComponent implements OnInit {
  @ViewChild("header") headerTemplate;
  @ViewChild("footer") footerTemplate;
  constructor(private templateService: TemplateService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.templateService.templates.set("header", this.headerTemplate);
    this.templateService.templates.set("footer", this.footerTemplate);
  }
}
