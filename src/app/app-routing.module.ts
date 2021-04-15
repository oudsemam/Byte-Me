import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//FireBase
import { SignInComponent } from '../app/FireBase/sign-in/sign-in.component';
import { SignUpComponent } from '../app/FireBase/sign-up/sign-up.component';
import { DashboardComponent } from '../app/FireBase/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/FireBase/forgot-password/forgot-password.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { VerifyEmailComponent } from '../app/FireBase/verify-email/verify-email.component';
import { Routes, RouterModule } from '@angular/router';

const FireBaseRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {path: 'dashboard',component: DashboardComponent,
canActivate: [AuthGuard],},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
