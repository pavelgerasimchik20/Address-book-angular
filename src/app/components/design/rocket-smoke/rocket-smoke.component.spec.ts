import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSmokeComponent } from './rocket-smoke.component';

describe('RocketSmokeComponent', () => {
  let component: RocketSmokeComponent;
  let fixture: ComponentFixture<RocketSmokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocketSmokeComponent]
    });
    fixture = TestBed.createComponent(RocketSmokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
