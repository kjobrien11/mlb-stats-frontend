import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ScoreComponent } from '../score/score.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-live-stats',
  imports: [ScoreComponent, TeamComponent],
  templateUrl: './live-stats.component.html',
  styleUrl: './live-stats.component.css',
  standalone: true
})
export class LiveStatsComponent {

  data:any;
  current_game_counter: number = 0;
  homeTeam!: string;
  awayTeam!: string;
  homeScore: number = 0;
  awayScore: number = 0;

  constructor(private liveStats: ServiceService) {}

  ngOnInit(): void {
    this.refreshLiveStats();
  }

  refreshLiveStats(){
    console.log("getting live scores");
    this.liveStats.getLiveStats().subscribe((data) => {
      this.data = data;
      this.homeTeam = this.data[0]['home_team'];
      this.awayTeam = this.data[0]['away_team'];
      // this.homeScore = this.data[1]['home_score']
      // this.awayScore = this.data[1]['away_score']
    });
    console.log("HI?")
    console.log(this.data);
    console.log("HELLO?")
  }

  updateLiveStats(){
    if(this.current_game_counter +1 == this.data.length){
      this.refreshLiveStats();
      this.current_game_counter = 0;
    }else{
      this.current_game_counter = this.current_game_counter +1;
    }
    this.homeTeam = this.data[this.current_game_counter]['home_team'];
    this.awayTeam = this.data[this.current_game_counter]['away_team'];
    console.log(this.homeTeam);
  }

}
