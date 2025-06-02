import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineScoreComponent } from './line-score/line-score.component';
import { LiveStatsComponent } from './live-stats/live-stats.component';
import { MlbComponent } from './mlb/mlb.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MlbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mlb-stats-frontend';
}
