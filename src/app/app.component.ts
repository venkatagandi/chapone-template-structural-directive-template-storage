import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  messages = {
    one: "one is awesome",
    two: "two is better",
    three: "thee is amazing"
  };
  constructor() {
    setInterval(() => {
      this.messages = {
        one: `one is awesome ${Math.random()
          .toString()
          .slice(0, 3)}`,
        two: `two is better ${Math.random()
          .toString()
          .slice(0, 3)}`,
        three: `thee is amazing ${Math.random()
          .toString()
          .slice(0, 3)}`
      };
    }, 1000);
  }
}
