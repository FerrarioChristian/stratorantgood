import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsHandlerComponent } from './agents-handler.component';

describe('AgentsHandlerComponent', () => {
  let component: AgentsHandlerComponent;
  let fixture: ComponentFixture<AgentsHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
