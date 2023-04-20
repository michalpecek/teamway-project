import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestComponent } from './personality-test.component';
import { IQuestion, QuestionService } from '../question.service';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

describe('PersonalityTestComponent', () => {
  let component: PersonalityTestComponent;
  let fixture: ComponentFixture<PersonalityTestComponent>;

  @Component({ selector: 'app-question', template: '' })
  class StubQuestionComponent {
    @Input() question!: IQuestion;
  }

  class MockQuestionService {
    getQuestions() {
      return of([{ question: 'The question', answers: [{ answer: 'extrovert answer', weight: 9 }] }])
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalityTestComponent, StubQuestionComponent],
      providers: [{ provide: QuestionService, useClass: MockQuestionService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonalityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one current question', () => {
    expect(component.questions.length).toBe(0);
    expect(component.currentQuestion.question).toBe('The question')
  })

  it('should increase score by 5', () => {
    component.onAnswered(5);
    expect(component.score).toBe(5);
  })

});
