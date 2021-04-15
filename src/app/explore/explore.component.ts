import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { RecipiesService} from '../recipies.service'
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  recipies: Observable<any> | null = null;
  searchText: string = ''

  constructor(private service:RecipiesService) { }

  ngOnInit(): void {
  }

  searchByTerm(){
    this.recipies = this.service.searchRecipiesByTerm(this.searchText)
   
  }
}
