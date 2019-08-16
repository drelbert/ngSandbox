import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSandboxComponent } from './directives-sandbox.component';

describe('DirectivesSandboxComponent', () => {
  let component: DirectivesSandboxComponent;
  let fixture: ComponentFixture<DirectivesSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
