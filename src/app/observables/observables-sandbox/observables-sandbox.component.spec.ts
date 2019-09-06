import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesSandboxComponent } from './observables-sandbox.component';

describe('ObservablesSandboxComponent', () => {
  let component: ObservablesSandboxComponent;
  let fixture: ComponentFixture<ObservablesSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
