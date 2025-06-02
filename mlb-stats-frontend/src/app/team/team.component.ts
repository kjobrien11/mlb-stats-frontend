import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgIf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  standalone: true
})
export class TeamComponent {
  @Input() teamName!: string;
  @Input() score!:number;
  @Input() isHome!:boolean;
}
