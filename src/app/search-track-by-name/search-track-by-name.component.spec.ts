import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrackByNameComponent } from './search-track-by-name.component';

describe('SearchTrackByNameComponent', () => {
  let component: SearchTrackByNameComponent;
  let fixture: ComponentFixture<SearchTrackByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrackByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrackByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
