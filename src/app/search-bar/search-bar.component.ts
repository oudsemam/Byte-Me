import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { FileDetector } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { faRandom, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DietaryFilter } from '../dietary-filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchText: string = '';
  faSearch = faSearch;
  faRandom = faRandom;

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

  dietFilters: DietaryFilter[] = [
    {
      name: 'Gluten-free',
      initials: 'GF',
      clicked: false,
    },
    {
      name: 'Dairy-free',
      initials: 'DF',
      clicked: false,
    },
    {
      name: 'Vegan',
      initials: 'V',
      clicked: false,
    },
    {
      name: 'Vegetarian',
      initials: 'VG',
      clicked: false,
    },
    {
      name: 'Keto',
      initials: 'K',
      clicked: false,
    },
  ];

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
        this.searchText,
        healthfilters,
        this.catagory,
        this.cuisine
      )
      .subscribe((response) => {
        let resultList = response.hits;
        //Pushes response to an array on the service to be called by other components
        this.service.addSearch(resultList);
        this.service.sendList(resultList);
        this.router.navigate(['/results']);
      });
  }

  error(){
    this.service.notImplemented()
  }
}
