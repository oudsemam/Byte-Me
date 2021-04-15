import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { FileDetector } from 'selenium-webdriver';
import { RecipiesService} from '../recipes.service'
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  recipes: Observable<any> | null = null;
  searchText: string = ''
  vegan: boolean = false
  vegatarian: boolean = false
  glutenFree: boolean = false
  dairyFree: boolean = false
  keto: boolean = false
  catagory: string = ""
  cuisine: string = ""

  constructor(private service:RecipiesService) { }

  ngOnInit(): void {
  }

  search(){
    let healthfilters: string[] = []
    if (this.vegan){
      healthfilters.push('vegan')
    }
    if (this.vegatarian){
      healthfilters.push('vegatarian')
    }
    if (this.glutenFree){
      healthfilters.push('gluten-free')
    }
    if (this.dairyFree){
      healthfilters.push('dairy-free')
    }
    if (this.keto){
      healthfilters.push('keto-friendly')
    }
    
    this.recipes = this.service.searchRecipies(this.searchText, healthfilters, this.catagory, this.cuisine)
   
  }
}
