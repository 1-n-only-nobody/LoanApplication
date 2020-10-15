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

  showImage = 'none';
  isHidden = true;
  show = 'show';
  constructor(private service: CibilscoreService) { }

  ngOnInit() {

    this.service.findAll().subscribe(data => this.scoreList = data);
  }

  handleClick( val: string): void {

    if (val === 'show') {
      this.showImage = 'inline';
      this.isHidden = false;
      this.show = 'hide';
    } else if (val === 'hide') {
      this.showImage = 'none';
      this.isHidden = true;
      this.show = 'show';
    }
  }
}
