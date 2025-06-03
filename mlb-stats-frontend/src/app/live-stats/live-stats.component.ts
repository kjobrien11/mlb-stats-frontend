import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ScoreComponent } from '../score/score.component';
import { TeamComponent } from '../team/team.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-live-stats',
  imports: [ScoreComponent, TeamComponent, NgIf],
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
  outs:number = 0;
  inningStatus!:string;
  isFinal!:boolean;
  baseOccupancy!: { '1B': boolean; '2B': boolean; '3B': boolean };

  //derived
  isBattingHome:boolean = false;
  isBattingAway:boolean = false;

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
      this.homeScore = this.data[0]['home_score'];
      this.awayScore = this.data[0]['away_score'];
      this.outs = this.data[0]['outs'];
      this.inningStatus = this.data[0]['inning_status'];
      this.baseOccupancy = this.data[0]['base_occupancy'];
      this.isFinal = this.data[0]['is_final'];

      if(this.inningStatus.substring(0,1) == "T" || this.inningStatus.substring(0,1) == "t"){
        this.isBattingAway = true;
        this.isBattingHome = false;
      }else{
        console.log("look")
        console.log(this.inningStatus.substring(0,1));
        this.isBattingHome = true;
        this.isBattingAway = false;
      }
      
      
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
    this.homeScore = this.data[this.current_game_counter]['home_score'];
    this.awayScore = this.data[this.current_game_counter]['away_score'];
    this.outs = this.data[this.current_game_counter]['outs'];
    this.inningStatus = this.data[this.current_game_counter]['inning_status'];
    this.baseOccupancy = this.data[this.current_game_counter]['base_occupancy'];
    this.isFinal = this.data[this.current_game_counter]['is_final'];


    if(this.inningStatus.substring(0,1) == "T" || this.inningStatus.substring(0,1) == "t"){
      console.log("look T")
      console.log(this.inningStatus.substring(0,1));
      this.isBattingAway = true;
      this.isBattingHome = false;
    }else if (this.inningStatus.substring(0,1) == "B" || this.inningStatus.substring(0,1) == "b"){
      console.log("look B")
      console.log(this.inningStatus.substring(0,1));
      this.isBattingHome = true;
      this.isBattingAway = false;
    }else{
      this.isBattingHome = false;
      this.isBattingAway = false;
    }
  }

}
