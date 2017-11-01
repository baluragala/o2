import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input()
  totalTimeInSecs

  @Output()
  tick: EventEmitter<number> = new EventEmitter()

  handler:any;

  constructor() { }

  ngOnInit() {
    this.handler = setInterval(()=>{
      
      if (this.totalTimeInSecs > 0 )
        this.tick.emit(--this.totalTimeInSecs);
      else
        clearInterval(this.handler);

    },1000)
  }

}
