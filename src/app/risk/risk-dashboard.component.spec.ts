import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDashboardComponent } from './risk-dashboard.component';

describe('RiskDashboardComponent', () => {
  let component: RiskDashboardComponent;
  let fixture: ComponentFixture<RiskDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
