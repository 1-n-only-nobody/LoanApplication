import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';
import { CibilscoreService } from '../cibilscore.service';

@Component({
  selector: 'app-add-scores',
  templateUrl: './add-scores.component.html',
  styleUrls: ['./add-scores.component.css']
})
export class AddScoresComponent implements OnInit {

  scoreToAdd: CibilScore = {
    panNumber : '',
    firstName : '',
    score : 0
  };
  scoreList: CibilScore[];

  constructor(private service: CibilscoreService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.scoreList = data);
  }

  submit(): void {
    this.scoreList.push(this.scoreToAdd);
    console.log(this.scoreToAdd);
    this.scoreToAdd = {
      panNumber : '',
      firstName : '',
      score : 0
    };
  }

}
