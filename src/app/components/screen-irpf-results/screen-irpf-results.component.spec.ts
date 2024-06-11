import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenIrpfResultsComponent } from './screen-irpf-results.component';

describe('ScreenIrpfResultsComponent', () => {
  let component: ScreenIrpfResultsComponent;
  let fixture: ComponentFixture<ScreenIrpfResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenIrpfResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenIrpfResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
