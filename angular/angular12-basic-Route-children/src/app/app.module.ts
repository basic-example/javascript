import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UserPageComponent } from "./pages/user.component";
import { UserAccountPageComponent } from "./pages/user/account.component";
import { RoutingModule } from "./routing.module";

@NgModule({
  declarations: [AppComponent, UserPageComponent, UserAccountPageComponent],
  imports: [BrowserModule, RoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
