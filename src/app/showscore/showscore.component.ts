import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';
import { CibilscoreService } from '../cibilscore.service';

@Component({
  selector: 'app-showscore',
  templateUrl: './showscore.component.html',
  styleUrls: ['./showscore.component.css']
})
export class ShowscoreComponent implements OnInit {

  // scores: CibilScore = {panNumber: 'abcde12345q', firstName: 'Chandu', score: 999};

  scoreList: CibilScore[];

  constructor(private service: CibilscoreService) { }

  ngOnInit() {

    this.service.findAll().subscribe(data => this.scoreList = data);
  }

}
