import { Injectable, NgModule } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from "@angular/router";
import { UsersIdPageComponent } from "./pages/users/_id.component";

@Injectable({ providedIn: "root" })
export class UserResolver1 implements Resolve<any> {
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return (await fetch(`https://jsonplaceholder.cypress.io/users/1`)).json();
  }
}

const routes: Routes = [
  {
    path: "users/:id",
    component: UsersIdPageComponent,
    resolve: {
      user1: UserResolver1,
      user2: "userResolver2",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: "userResolver2",
      useValue: async (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Promise<any> => {
        return (
          await fetch(`https://jsonplaceholder.cypress.io/users/1`)
        ).json();
      },
    },
  ],
})
export class RoutingModule {}
