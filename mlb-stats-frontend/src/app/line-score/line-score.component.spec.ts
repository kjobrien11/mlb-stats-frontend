import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineScoreComponent } from './line-score.component';

describe('LineScoreComponent', () => {
  let component: LineScoreComponent;
  let fixture: ComponentFixture<LineScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
