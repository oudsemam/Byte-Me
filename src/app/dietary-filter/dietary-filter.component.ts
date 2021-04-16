import { Component, OnInit, Input } from '@angular/core';
import { DietaryFilter } from '../dietary-filter';

@Component({
  selector: 'app-dietary-filter',
  templateUrl: './dietary-filter.component.html',
  styleUrls: ['./dietary-filter.component.css'],
})
export class DietaryFilterComponent implements OnInit {
  @Input() diet: DietaryFilter | null = null;
  constructor() {}

  ngOnInit(): void {}
}
