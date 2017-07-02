import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { UploadsListComponent } from './components/uploads/uploads-list/uploads-list.component';
import { ReadmePageComponent } from './components/readme-page/readme-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: UserLoginComponent, },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard]},
  { path: 'uploads', component: UploadsListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
