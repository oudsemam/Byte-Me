import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { DietaryFilter } from '../dietary-filter';
import { CategoryFilter } from '../category-filter';
import { LocationFilter } from '../location-filter';
import {
  faAppleAlt,
  faBacon,
  faCheese,
  faDrumstickBite,
  faIceCream,
  faLemon,
} from '@fortawesome/free-solid-svg-icons';
import { FileDetector } from 'selenium-webdriver';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  recipes: Observable<any> | null = null;
  searchText: string = '';
  faCheese = faCheese;
  faDrumstickBite = faDrumstickBite;
  faLemon = faLemon;
  faIceCream = faIceCream;
  faAppleAlt = faAppleAlt;
  faBacon = faBacon;
  vegan: boolean = false;
  vegatarian: boolean = false;
  glutenFree: boolean = false;
  dairyFree: boolean = false;
  keto: boolean = false;
  catagory: string = '';
  cuisine: string = '';

  dietFilters: DietaryFilter[] = [
    {
      name: 'Gluten-free',
      initials: 'GF',
    },
    {
      name: 'Dairy-free',
      initials: 'DF',
    },
    {
      name: 'Vegan',
      initials: 'V',
    },
    {
      name: 'Vegetarian',
      initials: 'VG',
    },
    {
      name: 'Keto',
      initials: 'K',
    },
  ];

  categoryFilter: CategoryFilter[] = [
    {
      icon: faCheese,
      name: 'Appetizers',
    },
    {
      icon: faBacon,
      name: 'Breakfast',
    },
    {
      icon: faIceCream,
      name: 'Desserts',
    },
    {
      icon: faLemon,
      name: 'Drinks',
    },
    {
      icon: faDrumstickBite,
      name: 'Lunch',
    },

    {
      icon: faAppleAlt,
      name: 'Snacks',
    },
  ];

  locationFilter: LocationFilter[] = [
    {
      location: 'American',
    },
    {
      location: 'Asian',
    },
    {
      location: 'British',
    },
    {
      location: 'Caribbean',
    },
    {
      location: 'Central Europe',
    },
    {
      location: 'Chinese',
    },
    {
      location: 'Eastern Europe',
    },
    {
      location: 'French',
    },
    {
      location: 'Indian',
    },
    {
      location: 'Italian',
    },
    {
      location: 'Japanese',
    },
    {
      location: 'Kosher',
    },
    {
      location: 'Mediterranean',
    },
    {
      location: 'Mexican',
    },
    {
      location: 'Middle Eastern',
    },
    {
      location: 'Nordic',
    },
    {
      location: 'South American',
    },
    {
      location: 'South East Asian',
    },
  ];

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

    this.recipes = this.service.searchRecipes(
      this.searchText,
      healthfilters,
      this.catagory,
      this.cuisine
    );
  }
}
