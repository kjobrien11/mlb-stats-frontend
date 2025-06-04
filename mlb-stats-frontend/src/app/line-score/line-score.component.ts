import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-line-score',
  imports: [],
  templateUrl: './line-score.component.html',
  styleUrl: './line-score.component.css',
  standalone: true
})
export class LineScoreComponent {

  scores: string[] = [];
  current_score!: string 
  curren_score_counter: number = 0;

  constructor(private lineScore: ServiceService) {}

  ngOnInit(): void {
    this.refreshLineScores();
    this.current_score =  this.scores[0]
  }

  refreshLineScores(){
    console.log("getting new scores");
    this.lineScore.getLineScores().subscribe((data) => {
      this.scores = data;
    });
  }

  refreshCurrentScore(){
    if(this.curren_score_counter +1 == this.scores.length){
      this.refreshLineScores();
      this.curren_score_counter = 0;
    }else{
      this.curren_score_counter = this.curren_score_counter +1;
    }
    this.current_score = this.scores[this.curren_score_counter];
    console.log(this.current_score);
  }


}
