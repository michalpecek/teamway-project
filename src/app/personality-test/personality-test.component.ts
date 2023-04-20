import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IQuestion, QuestionService } from '../question.service';

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {

  @Output() returnResult: EventEmitter<string> = new EventEmitter();

  questions!: IQuestion[];
  questionsCount = 0;
  currentQuestion!: IQuestion;
  score = 0;

  constructor(private questionService: QuestionService) { }


  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
      {
        next: questions => {
          this.questions = questions;
          this.questionsCount = questions.length;
          this.setCurrentQuestion();
        }
      }
    )
  }

  setCurrentQuestion() {
    let nextQuestion = this.questions.pop()
    if (nextQuestion) {
      this.currentQuestion = nextQuestion;
    }
    else {
      this.closeTest();
    }
  }

  closeTest() {
    let average = this.score / this.questionsCount;
    this.returnResult.emit(average < 5 ? 'Introvert' : 'Extrovert');
  }

  onAnswered(answerWeight: number) {
    this.score += answerWeight;
    this.setCurrentQuestion();
  }

}
