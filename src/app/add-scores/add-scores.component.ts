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
    id : 0,
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
    this.service.add(this.scoreToAdd).subscribe(
      data => this.scoreList.push(data)
    );
    // this.scoreList.push(this.scoreToAdd);
    console.log(this.scoreToAdd);
    this.scoreToAdd = {
      id : 0,
      panNumber : '',
      firstName : '',
      score : 0
    };
  }

  remove(entity: CibilScore): void {
    const indexPosition = this.scoreList.indexOf(entity);
    // this.scoreList.splice(indexPosition, 1);
    this.service.remove(entity).subscribe(
      data => this.scoreList.splice(indexPosition, 1)
    )
    console.log(entity);
  }
}
