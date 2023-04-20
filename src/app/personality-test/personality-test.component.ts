import { Component, OnInit } from '@angular/core';
import { IQuestion, QuestionService } from '../question.service';

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit  {

  questions! : IQuestion[];
  questionsCount = 0;

  constructor(private questionService: QuestionService){}
  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
      {next: questions => {
        this.questions = questions;
        this.questionsCount = questions.length;
      }
      } 
    )
  }
}
