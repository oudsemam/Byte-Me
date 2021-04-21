import { Component, OnInit } from '@angular/core';
import * as convert  from 'convert-units';


@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css'],
})
export class ConversionsComponent implements OnInit {
  //This holds the array of singulars (aka units) for conversion.
  convertFrom;
  //This holds the array of singulars (aka units) for converts to.
  convertTo;
  //This holds the user's selected input to convert from
  selectedFrom;
  //This holds the user's selected input to convert to
  selectedTo;
  //The value inputed by the user
  value;
  //The value outputed by the convert API
  output;
  //array
  conversionType = [
    'length',
    'area',
    'mass',
    'volume',
    'temperature',
    'pressure',
  ];
  //stores the value selected by the user
  conversionTypeSelected;

  constructor() {}

  ngOnInit(): void {}


  /**
   * This function populates the other two drop down menus based on the over arching type of conversion the user would like to do.
   * @param conversionType conversion type selected from array
   */
  onSelect(conversionType) {
        //this is filtering for volume from the larger convert API
        this.convertFrom = convert()
          .list()
          .filter((unit) => unit.measure === conversionType);
        this.convertTo = convert()
          .list()
    .filter((unit) => unit.measure === conversionType);
  }

  /**
   * This function when the button is clicked will convert the user's value and convert from to output using the users selected convertTo.
   */
  onClick() {
    this.output = convert(this.value)
      .from(this.selectedFrom)
      .to(this.selectedTo);
  }
}
