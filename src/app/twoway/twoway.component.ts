import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  city = 'Ahmedabad';
  cities: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  handleClickToo(): void {

    this.cities.push(this.city);
    console.log(this.cities);
  }
}
