import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { FileDetector } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchText: string = '';
  faSearch = faSearch;

  vegan: boolean = false;
  vegatarian: boolean = false;
  glutenFree: boolean = false;
  dairyFree: boolean = false;
  keto: boolean = false;
  catagory: string = '';
  cuisine: string = '';
  subscription: Subscription

  constructor(private service: RecipesService, private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy(){
    if(this.subscription)
    {this.subscription.unsubscribe()}
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


    this.subscription = this.service.searchRecipes(this.searchText,healthfilters,this.catagory,this.cuisine).subscribe((response) =>{
      let resultList = response.hits
      //Pushes response to an array on the service to be called by other components
      this.service.addSearch(resultList)
      this.service.sendList(resultList)
      console.log(resultList, 'Results list showing')
      this.router.navigate(['/results'])
    });

  }
}
