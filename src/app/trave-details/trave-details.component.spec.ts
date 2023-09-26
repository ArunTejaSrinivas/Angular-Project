import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveDetailsComponent } from './trave-details.component';

describe('TraveDetailsComponent', () => {
  let component: TraveDetailsComponent;
  let fixture: ComponentFixture<TraveDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraveDetailsComponent]
    });
    fixture = TestBed.createComponent(TraveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
