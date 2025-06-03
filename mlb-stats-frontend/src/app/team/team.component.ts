import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgIf, CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  standalone: true
})
export class TeamComponent implements OnInit, OnDestroy{
  @Input() teamName!: string;
  @Input() score!:number;
  @Input() isHome!:boolean;
  @Input() isBatting!: boolean;
  logo!: string;
  //'imgs-batting' : 'imgs'"
  classStyling:string = "imgs";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['teamName']) {
      const currentTeam = changes['teamName'].currentValue;
      this.logo = this.generateImageName(currentTeam);
    }
    if (changes['isBatting']) {
      console.log("LOOOOOOOOOKKKKK")
      this.isBatting = changes['isBatting'].currentValue;
      if(this.isBatting == true){
        console.log(this.isBatting)
        this.classStyling = "imgs-batting"
        
      }else{
        this.classStyling = "imgs";
      }
    }
  }

  ngOnInit(){
    this.logo = this.generateImageName(this.teamName)
    console.log("me")
    console.log(this.isBatting)
  }

  ngOnDestroy(): void {
    console.log("SEeE YEAHHH")
  }




  private generateImageName(team: string): string {
    const mapped = this.teamNameMap[team.trim()];
    return mapped ? mapped : 'NO_NAME.png';
  }

  private teamNameMap: { [key: string]: string } = {
    'Arizona Diamondbacks': 'diamondbacks.png',
    'Atlanta Braves': 'braves.png',
    'Baltimore Orioles': 'orioles.png',
    'Boston Red Sox': 'redsox.png',
    'Chicago White Sox': 'whitesox.png',
    'Chicago Cubs': 'cubs.png',
    'Cincinnati Reds': 'reds.png',
    'Cleveland Guardians': 'guardians.png',
    'Colorado Rockies': 'rockies.png',
    'Detroit Tigers': 'tigers.png',
    'Houston Astros': 'astros.png',
    'Kansas City Royals': 'royals.png',
    'Los Angeles Angels': 'angels.png',
    'Los Angeles Dodgers': 'dodgers.png',
    'Miami Marlins': 'marlins.png',
    'Milwaukee Brewers': 'brewers.png',
    'Minnesota Twins': 'twins.png',
    'New York Mets': 'mets.png',
    'New York Yankees': 'yankees.png',
    'Athletics': 'athletics.png',
    'Philadelphia Phillies': 'phillies.png',
    'Pittsburgh Pirates': 'pirates.png',
    'San Diego Padres': 'padres.png',
    'San Francisco Giants': 'giants.png',
    'Seattle Mariners': 'mariners.png',
    'St. Louis Cardinals': 'cardinals.png',
    'Tampa Bay Rays': 'rays.png',
    'Texas Rangers': 'rangers.png',
    'Toronto Blue Jays': 'bluejays.png',
    'Washington Nationals': 'nationals.png'
  };
  

  
}
