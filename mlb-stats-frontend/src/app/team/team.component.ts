import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgIf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  standalone: true
})
export class TeamComponent implements OnInit{
  @Input() teamName!: string;
  @Input() score!:number;
  @Input() isHome!:boolean;
  logo!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['teamName']) {
      const currentTeam = changes['teamName'].currentValue;
      console.log('Changes in TeamComponent:', changes);
      this.logo = this.generateImageName(currentTeam);
    }
  }

  ngOnInit(){
    this.logo = this.generateImageName(this.teamName)
    console.log(this.logo)
  }

  private generateImageName(team:string) {

    const parts = team.trim().split(' ');
    if (parts.length > 1) {
      const fullTeamName = parts.slice(1).join(' ').toLowerCase();
      return `${fullTeamName}.png`;
    } else {
      return 'NO_NAME.png';
    }
  }
}
