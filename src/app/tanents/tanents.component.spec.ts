import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanentsComponent } from './tanents.component';

describe('TanentsComponent', () => {
  let component: TanentsComponent;
  let fixture: ComponentFixture<TanentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
