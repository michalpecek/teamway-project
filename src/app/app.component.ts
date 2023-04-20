import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  runningTest = false;
  result = '';
  
  startClicked(){
    this.runningTest = true;
  }

  displayResult(result: string){
    this.runningTest = false;
    this.result = result;
  }
}

