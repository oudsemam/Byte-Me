import { Component, OnInit, Input } from '@angular/core';
import {
  faAppleAlt,
  faBacon,
  faCheese,
  faDrumstickBite,
  faIceCream,
  faLemon,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { CategoryFilter } from '../category-filter';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent implements OnInit {
  @Input() category: CategoryFilter | null = null;
  @Input() faCheese: IconDefinition = faCheese;
  @Input() faDrumstickBite: IconDefinition = faDrumstickBite;
  @Input() faAppleAlt: IconDefinition = faAppleAlt;
  @Input() faBacon: IconDefinition = faBacon;
  @Input() faLemon: IconDefinition = faLemon;
  @Input() faIceCream: IconDefinition = faIceCream;
  constructor() {}

  ngOnInit(): void {}
}
