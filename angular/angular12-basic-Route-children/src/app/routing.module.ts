import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserPageComponent } from "./pages/user.component";
import { UserAccountPageComponent } from "./pages/user/account.component";
import { UserProfilePageComponent } from "./pages/user/profile.component";

const routes: Routes = [
  {
    path: "user",
    component: UserPageComponent,
    children: [
      {
        path: "account",
        component: UserAccountPageComponent,
      },
    ],
  },
  {
    path: "user/profile",
    component: UserProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
