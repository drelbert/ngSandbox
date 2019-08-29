import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLicActivityComponent } from './state-lic-activity.component';

describe('StateLicActivityComponent', () => {
  let component: StateLicActivityComponent;
  let fixture: ComponentFixture<StateLicActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateLicActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateLicActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
