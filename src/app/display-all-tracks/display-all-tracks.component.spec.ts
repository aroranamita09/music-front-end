import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllTracksComponent } from './display-all-tracks.component';

describe('DisplayAllTracksComponent', () => {
  let component: DisplayAllTracksComponent;
  let fixture: ComponentFixture<DisplayAllTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
