import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOptionGroupCardComponent } from './config-option-group-card.component';

describe('ConfigOptionGroupCardComponent', () => {
  let component: ConfigOptionGroupCardComponent;
  let fixture: ComponentFixture<ConfigOptionGroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigOptionGroupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOptionGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
