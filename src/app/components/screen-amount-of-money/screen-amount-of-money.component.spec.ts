import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAmountOfMoneyComponent } from './screen-amount-of-money.component';

describe('ScreenAmountOfMoneyComponent', () => {
  let component: ScreenAmountOfMoneyComponent;
  let fixture: ComponentFixture<ScreenAmountOfMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenAmountOfMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenAmountOfMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
