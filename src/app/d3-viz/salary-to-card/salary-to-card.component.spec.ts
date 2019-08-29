import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryToCardComponent } from './salary-to-card.component';

describe('SalaryToCardComponent', () => {
  let component: SalaryToCardComponent;
  let fixture: ComponentFixture<SalaryToCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryToCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
