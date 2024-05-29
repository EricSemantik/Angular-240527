import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "list", component: ListComponent, canActivate: [authGuard]},
  {path: "todo", component: TodoComponent, canActivate: [authGuard]},
  {path: "user", component: UserComponent, canActivate: [authGuard]},
  {path: "login", component: LoginComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
