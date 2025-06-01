import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://127.0.0.1:8000/line-scores';

  constructor(private http: HttpClient) {}

  getLineScores(): Observable<any> {
    console.log("inside service")
    return this.http.get<any>(this.apiUrl);
  }
}

