import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineScoreComponent } from './line-score/line-score.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LineScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mlb-stats-frontend';
}
