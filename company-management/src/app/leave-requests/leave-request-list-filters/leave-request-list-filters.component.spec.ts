import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestListFiltersComponent } from './leave-request-list-filters.component';

describe('LeaveRequestListFiltersComponent', () => {
  let component: LeaveRequestListFiltersComponent;
  let fixture: ComponentFixture<LeaveRequestListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRequestListFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
