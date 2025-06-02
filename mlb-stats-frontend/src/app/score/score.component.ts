import { Component, Input, OnInit } from '@angular/core';
import { LineScoreComponent } from '../line-score/line-score.component';
import { LiveStatsComponent } from '../live-stats/live-stats.component';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
  standalone:true
})
export class ScoreComponent implements OnInit{

  @Input() outs!: number;
  @Input() inningStatus!: string;
  @Input() base_occupancy: any;

  ngOnInit(): void {
    console.log(this.outs);
    console.log(this.inningStatus);
  }
}
