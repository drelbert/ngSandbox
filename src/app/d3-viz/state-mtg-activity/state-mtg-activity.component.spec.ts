import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMtgActivityComponent } from './state-mtg-activity.component';

describe('StateMtgActivityComponent', () => {
  let component: StateMtgActivityComponent;
  let fixture: ComponentFixture<StateMtgActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMtgActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMtgActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
