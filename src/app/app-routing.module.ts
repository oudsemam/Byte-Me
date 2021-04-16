import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { CommonModule } from '@angular/common';

//FireBase
import { SignInComponent } from '../app/FireBase/sign-in/sign-in.component';
import { SignUpComponent } from '../app/FireBase/sign-up/sign-up.component';
import { DashboardComponent } from '../app/FireBase/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/FireBase/forgot-password/forgot-password.component';
import { AuthGuard } from '../../node_modules/@angular/fire/auth-guard/auth-guard';
import { VerifyEmailComponent } from '../app/FireBase/verify-email/verify-email.component';

  
const routes: Routes = [
  //Sign in routes
  { 
    path: '', redirectTo: '/sign-in', pathMatch: 'full' 
  },
  { 
    path: 'sign-in', 
    component: SignInComponent 
  },
  { 
    path: 'register-user', 
    component: SignUpComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: 'forgot-password', 
    component: ForgotPasswordComponent 
  },
  { 
    path: 'verify-email-address', 
    component: VerifyEmailComponent 
  },
  
  //other major components routes
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'recipeBook',
    component: RecipeBookComponent,
  },
  {
    path: 'conversions',
    component: ConversionsComponent,
  },
  {
    path: 'shoppingList',
    component: ShoppingListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
