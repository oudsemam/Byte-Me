import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
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
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
