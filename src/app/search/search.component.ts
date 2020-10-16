import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchLabel: string;

  textColor = 'yellowText';
  border = 'thickBorder';

  showColor = true;
  showBorder = false;

  constructor() {
    console.log('inside Constructor ' + this.searchLabel);
   }

  ngOnInit() {
    console.log('inside ngOnInit ' + this.searchLabel);
  }

  change(): void {
    this.showBorder = !this.showBorder;
    this.showColor = !this.showColor;
  }
}
