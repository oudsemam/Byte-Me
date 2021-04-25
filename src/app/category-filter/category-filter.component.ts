import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAppleAlt,
  faBacon,
  faCheese,
  faDrumstickBite,
  faIceCream,
  faLemon,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CategoryFilter } from '../category-filter';
import { RecipesService } from '../recipes.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent implements OnInit, OnDestroy{
  @Input() category: CategoryFilter | null = null;
  @Input() faCheese: IconDefinition = faCheese;
  @Input() faDrumstickBite: IconDefinition = faDrumstickBite;
  @Input() faAppleAlt: IconDefinition = faAppleAlt;
  @Input() faBacon: IconDefinition = faBacon;
  @Input() faLemon: IconDefinition = faLemon;
  @Input() faIceCream: IconDefinition = faIceCream;
  searchText: string | null = this.category?.name;
  faSearch = faSearch;

  vegan: boolean = false;
  vegatarian: boolean = false;
  glutenFree: boolean = false;
  dairyFree: boolean = false;
  keto: boolean = false;
  catagory: string = '';
  cuisine: string = '';
  subscription: Subscription;

  constructor(private service: RecipesService, private router: Router) {}
  
  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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

    this.subscription = this.service
      .searchRecipes(
        this.category.name,
        healthfilters,
        this.catagory,
        this.cuisine
      )
      .subscribe((response) => {
        let resultList = response.hits;
        //Pushes response to an array on the service to be called by other components
        this.service.addSearch(resultList);
        this.service.sendList(resultList);
        this.router.navigate(['/categoryResults']);
      });
  }
}
