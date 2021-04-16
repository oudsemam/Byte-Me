import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ExploreComponent } from './explore/explore.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ResultsComponent } from './results/results.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DirectionsComponent } from './directions/directions.component';
import { NotesComponent } from './notes/notes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FavRecipeCardComponent } from './fav-recipe-card/fav-recipe-card.component';
import { DietaryFilterComponent } from './dietary-filter/dietary-filter.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { LocationFilterComponent } from './location-filter/location-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DashboardComponent } from './FireBase/dashboard/dashboard.component';
import { SignInComponent } from './FireBase/sign-in/sign-in.component';
import { SignUpComponent } from './FireBase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './FireBase/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './FireBase/verify-email/verify-email.component';

//Auth service
import { AuthService } from './shared/services/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    ExploreComponent,
    CatagoriesComponent,
    ResultsComponent,
    RecipeViewComponent,
    IngredientsComponent,
    DirectionsComponent,
    NotesComponent,
    FavoritesComponent,
    ConversionsComponent,
    ShoppingListComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    RecipeBookComponent,
    FavRecipeCardComponent,
    DietaryFilterComponent,
    CategoryFilterComponent,
    LocationFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      'Byte Me Recipe App'
    ),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features

    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
