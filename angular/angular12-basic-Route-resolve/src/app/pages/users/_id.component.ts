import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./_id.component.html",
})
export class UsersIdPageComponent {
  public data: any;
  constructor(public route: ActivatedRoute) {
    route.params.subscribe(() => {
      this.data = route.snapshot.data;
    });
  }
}
