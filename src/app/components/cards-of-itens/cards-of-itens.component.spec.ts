import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOfItensComponent } from './cards-of-itens.component';

describe('CardsOfItensComponent', () => {
  let component: CardsOfItensComponent;
  let fixture: ComponentFixture<CardsOfItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsOfItensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsOfItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
