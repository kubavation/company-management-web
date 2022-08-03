import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractBaseModalComponent } from './abstract-base-modal.component';

describe('AbstractBaseModalComponent', () => {
  let component: AbstractBaseModalComponent;
  let fixture: ComponentFixture<AbstractBaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractBaseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractBaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
