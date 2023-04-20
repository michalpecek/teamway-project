import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestComponent } from './personality-test.component';
import { IQuestion, QuestionService } from '../question.service';
import { Observable, of } from 'rxjs';

describe('PersonalityTestComponent', () => {
  let component: PersonalityTestComponent;
  let fixture: ComponentFixture<PersonalityTestComponent>;

  class MockQuestionService {
    getQuestions() {
      return of([{question: 'The question', answers:[{answer: 'exrovert answer', weight: 9}]}])
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityTestComponent],
      providers: [{provide: QuestionService, useClass: MockQuestionService} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one question', () => {
    expect(component.questions.length).toBe(1)
  })
  
});
