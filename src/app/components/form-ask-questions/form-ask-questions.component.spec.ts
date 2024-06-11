import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAskQuestionsComponent } from './form-ask-questions.component';

describe('FormAskQuestionsComponent', () => {
  let component: FormAskQuestionsComponent;
  let fixture: ComponentFixture<FormAskQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAskQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAskQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
