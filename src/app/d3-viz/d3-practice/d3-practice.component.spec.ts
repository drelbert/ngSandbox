import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3PracticeComponent } from './d3-practice.component';

describe('D3PracticeComponent', () => {
  let component: D3PracticeComponent;
  let fixture: ComponentFixture<D3PracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3PracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
