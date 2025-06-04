import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
  standalone:true
})
export class ScoreComponent implements OnInit, OnChanges{

  @Input() outs: number = 0;
  @Input() inningStatus: string = "";
  @Input() baseOccupancy!: { '1B': boolean; '2B': boolean; '3B': boolean };
  @Input() isFinal!:boolean;
  baseStatus!: string;

  ngOnInit(): void {
    console.log(this.outs);
    console.log(this.inningStatus);
    console.log(this.baseOccupancy);
    this.baseStatus = this.parseBaseOccupancy(this.baseOccupancy)
    console.log(this.baseStatus);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update base_status when offense input changes
    console.log(changes)
    if (changes['baseOccupancy']) {
      this.baseStatus = this.parseBaseOccupancy(changes['baseOccupancy']['currentValue']);
    }

    if (changes['isFinal']) {
      if(this.isFinal){
        this.inningStatus = "final";
      }
      
    }
  }

  parseBaseOccupancy(bases: any){
    const first = bases["1B"] ? "1" : "0";
    const second = bases["2B"] ? "1" : "0";
    const third = bases["3B"] ? "1" : "0";
  
    const fileName = `${first}${second}${third}.png`;
    console.log("Filename:", fileName);
    return fileName;
  }
}
