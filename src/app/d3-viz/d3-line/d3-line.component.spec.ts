import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BarComponent } from './d3-line.component';

describe('D3LineComponent', () => {
  let component: D3BarComponent;
  let fixture: ComponentFixture<D3BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
