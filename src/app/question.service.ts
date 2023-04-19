import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';

export interface IAnswer {
  answer:string,
  weight: number
}

export interface IQuestion {
  id: number,
  question: string,
  answers: IAnswer[]
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsUrl = 'assets/questions.json'

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this.questionsUrl).pipe(
      tap((data: any) => console.log('Questions:', JSON.stringify(data)))
    )
  }
}
