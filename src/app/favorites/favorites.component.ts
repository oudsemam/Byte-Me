import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  faHeart = faHeart;
  toggle: boolean = false;
  status = 'Enable';
  event: Event[] = [];

  constructor(private service: RecipesService) {}

  ngOnInit(): void { }

  enableDisable(){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  saveRecipe(recipeItem: any){
    this.enableDisable();
    if (!recipeItem.favorite) {
      recipeItem.favorite = true;
      this.service.addRecipeBookListEvent(recipeItem);
    }
    else if (recipeItem.favorite === true){
      recipeItem.favorite = false;
      this.service.removeRecipeBookListEvent(recipeItem)
    }
  }
}
