import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchLabel: string;
  @Input() searchString: string;

  @Output() responseEvent: EventEmitter<string> = new EventEmitter<string>();

  textColor = 'yellowText';
  border = 'thickBorder';

  showColor = true;
  showBorder = false;

  list: Map<string, number> = new Map();

  constructor() {
    console.log('inside Constructor ' + this.searchLabel);

    this.list.set('Chandu', 450);
    this.list.set('Bandu', 550);
    this.list.set('Tandu', 650);
   }

  ngOnInit() {
    console.log('inside ngOnInit ' + this.searchLabel);
  }

  change(): void {
    this.showBorder = !this.showBorder;
    this.showColor = !this.showColor;
  }

  handleClick(): void {

    const score = this.list.get(this.searchString);

    if (score === undefined) {
      this.responseEvent.emit('Does not exists in the list.');
    } else {
      this.responseEvent.emit('Result of Search from list: ' + score);
    }
  }
}
