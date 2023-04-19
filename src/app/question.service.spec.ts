import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { QuestionService } from './question.service';


//No need for HttpClientTestingModule as the HttpClient is reading local file.

describe('QuestionService', () => {
  let service: QuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(QuestionService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 4 questions', () =>{
    service.getQuestions().subscribe(questions => {
      expect(questions.length).toBe(4)
    })
  });
  it('should return first question this is first question ', () => {
    service.getQuestions().subscribe(questions => {
      expect(questions[0].question).toBe('this is first question')
    })
  })



});
