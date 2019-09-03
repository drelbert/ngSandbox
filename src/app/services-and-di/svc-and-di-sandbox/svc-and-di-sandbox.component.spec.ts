import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcAndDiSandboxComponent } from './svc-and-di-sandbox.component';

describe('SvcAndDiSandboxComponent', () => {
  let component: SvcAndDiSandboxComponent;
  let fixture: ComponentFixture<SvcAndDiSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvcAndDiSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvcAndDiSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
