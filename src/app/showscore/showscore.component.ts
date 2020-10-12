import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';

@Component({
  selector: 'app-showscore',
  templateUrl: './showscore.component.html',
  styleUrls: ['./showscore.component.css']
})
export class ShowscoreComponent implements OnInit {

  scores: CibilScore = {panNumber: 'abcde12345q', firstName: 'Chandu', score: 999};
  constructor() { }

  ngOnInit() {
  }

}
