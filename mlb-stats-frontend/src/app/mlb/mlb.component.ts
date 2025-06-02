import { Component } from '@angular/core';
import { LineScoreComponent } from '../line-score/line-score.component';
import { LiveStatsComponent } from '../live-stats/live-stats.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-mlb',
  imports: [LineScoreComponent, LiveStatsComponent],
  templateUrl: './mlb.component.html',
  styleUrl: './mlb.component.css'
})
export class MlbComponent {
  @ViewChild(LineScoreComponent) linescore!: LineScoreComponent;
  @ViewChild(LiveStatsComponent) teams!: LiveStatsComponent;

  startTime(){
    setInterval(() => {
      this.linescore.refreshCurrentScore();
      this.teams.updateLiveStats();
      console.log("working");
    }, 1000); 
  }
}
