import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCardInfoComponent } from './complete-card-info.component';

describe('CompleteCardInfoComponent', () => {
  let component: CompleteCardInfoComponent;
  let fixture: ComponentFixture<CompleteCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteCardInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
