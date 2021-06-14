import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public title: any;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.getTitle();
  }

  async getTitle() {
    this.title = (
      (await this.httpClient
        .get("https://jsonplaceholder.cypress.io/posts/1")
        .toPromise()) as any
    ).title;
  }
}
