import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-live-stats',
  imports: [],
  templateUrl: './live-stats.component.html',
  styleUrl: './live-stats.component.css',
  standalone: true
})
export class LiveStatsComponent {

  data:any;

  constructor(private liveStats: ServiceService) {}

  ngOnInit(): void {
    this.refreshLiveStats();
  }

  refreshLiveStats(){
    console.log("getting live scores");
    this.liveStats.getLiveStats().subscribe((data) => {
      this.data = data;
    });
    console.log("HI?")
    console.log(this.data);
    console.log("HELLO?")
  }

}
