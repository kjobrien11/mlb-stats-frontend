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

  scores: any[] = [];

  constructor(private scoreFetcher: ServiceService) {}

  ngOnInit(): void {
    this.scoreFetcher.getLineScores().subscribe((data) => {
      this.scores = data;
    });
    console.log(this.scores[0])
  }
}
