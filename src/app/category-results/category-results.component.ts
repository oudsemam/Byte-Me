import { Component, Input, OnInit } from '@angular/core';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-category-results',
  templateUrl: './category-results.component.html',
  styleUrls: ['./category-results.component.css'],
})
export class CategoryResultsComponent implements OnInit {
  @Input() sampleResults: RecipeCardResult[] = [
    {
      glutenFree: true,
      dairyFree: true,
      vegetarian: true,
      vegan: true,
      keto: true,
      name: 'Yogurt Cheescake',
      time: '40 mins',
      mealType: 'DESSERT',
      favorite: true,
    },
  ];
  searchText: string = '';

  vegan: boolean = false;
  vegatarian: boolean = false;
  glutenFree: boolean = false;
  dairyFree: boolean = false;
  keto: boolean = false;
  catagory: string = '';
  cuisine: string = '';

  constructor(private service: RecipesService) {}

  ngOnInit(): void {}

  search() {
    let healthfilters: string[] = [];
    if (this.vegan) {
      healthfilters.push('vegan');
    }
    if (this.vegatarian) {
      healthfilters.push('vegatarian');
    }
    if (this.glutenFree) {
      healthfilters.push('gluten-free');
    }
    if (this.dairyFree) {
      healthfilters.push('dairy-free');
    }
    if (this.keto) {
      healthfilters.push('keto-friendly');
    }

    this.service.searchRecipes(this.searchText,healthfilters,this.catagory,this.cuisine).subscribe((response) =>{
      let resultList = []
      for(let recipe of response.hits){
        resultList.push(recipe)
      }
      //Pushes response to an array on the service to be called by other components
      this.service.addSearch(resultList)
    });
  }
}
