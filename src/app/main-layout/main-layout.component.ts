import { Component, OnInit } from '@angular/core';
import {
  faBook,
  faCalculator,
  faCompass,
  faList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  faCompass = faCompass;
  faBook = faBook;
  faCalculator = faCalculator;
  faList = faList;

  constructor() {}

  ngOnInit(): void {}
}
