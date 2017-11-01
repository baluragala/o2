import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  timeLeft;

  changeTitle(){
    this.title = 'New Application'
  }

  setTitle(event){
    console.log(event.target.value);
    this.title = event.target.value;
  }

  updateTimeLeft(time){
    this.timeLeft=time;
  }
}
