import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private lineScoreUrl = 'http://127.0.0.1:8000/line-scores';
  private liveStatsUrl = 'http://127.0.0.1:8000/game-information';


  constructor(private http: HttpClient) {}

  getLineScores(): Observable<string[]> {
    console.log("inside service")
    return this.http.get<string[]>(this.lineScoreUrl);
  }

  getLiveStats(): Observable<any> {
    console.log("inside service")
    return this.http.get<any>(this.liveStatsUrl);
  }
}

