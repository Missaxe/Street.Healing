import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-account/user-signup/user-signup.component';
import { UserLoginComponent } from './user-account/user-login/user-login.component';


const routes: Routes = [
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'userLogin', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
