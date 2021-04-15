import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipiesService } from '../recipies.service';
import { DietaryFilter } from '../dietary-filter';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  recipies: Observable<any> | null = null;
  searchText: string = '';

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

  constructor(private service: RecipiesService) {}

  ngOnInit(): void {}

  searchByTerm() {
    this.recipies = this.service.searchRecipiesByTerm(this.searchText);
  }
}
