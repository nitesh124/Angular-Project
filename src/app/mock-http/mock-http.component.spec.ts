import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHttpComponent } from './mock-http.component';

describe('MockHttpComponent', () => {
  let component: MockHttpComponent;
  let fixture: ComponentFixture<MockHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
