import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMortgageActivityComponent } from './state-mortgage-activity.component';

describe('StateMortgageActivityComponent', () => {
  let component: StateMortgageActivityComponent;
  let fixture: ComponentFixture<StateMortgageActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMortgageActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMortgageActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
