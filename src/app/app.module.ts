import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstDirective } from "./directives/first.directive";
import { BasicComponent } from "./basic/basic.component";
import { TrackDirective } from "./directives/track.directive";
import { TrackdirComponent } from "./trackdir/trackdir.component";
import { TrackingService } from "./trackdir/services/tracking.service";
import { OnlineService } from "./trackdir/services/online.service";
import { OnlineDirective } from "./directives/online.directive";
import { ThreeDirective } from "./directives/three.directive";
import { TemplateService } from "./services/template.service";
import { TemplateStorageComponent } from "./template-storage/template-storage.component";
import { SurrroundDirective } from "./directives/surrond.directive";

@NgModule({
  declarations: [
    AppComponent,
    FirstDirective,
    TrackDirective,
    OnlineDirective,
    ThreeDirective,
    TemplateStorageComponent,
    SurrroundDirective,
    BasicComponent,
    TrackdirComponent
  ],
  imports: [BrowserModule],
  providers: [TrackingService, OnlineService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
