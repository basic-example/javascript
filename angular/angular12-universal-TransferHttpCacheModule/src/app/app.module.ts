import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    TransferHttpCacheModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
