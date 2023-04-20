import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IQuestion } from '../question.service';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  _question!: IQuestion;
  
  @ViewChild('answerList') optionsList!: MatSelectionList

  @Input() set question(value: IQuestion) {
    this._question = value;
    if (this.optionsList) this.optionsList.deselectAll();
  };
  @Output() answerValue: EventEmitter<number> = new EventEmitter<number>();

  get question() {
    return this._question;
  }

  selected(change: MatSelectionListChange) {
    this.answerValue.emit(change.options[0].value)

  }
}
