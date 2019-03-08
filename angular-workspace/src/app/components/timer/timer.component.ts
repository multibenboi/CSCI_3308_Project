import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
    timeLeft: number = 20;
    interval;
    paused: boolean = true; //to only allow start if not in progress


    startTimerIfPaused(){
        if (this.paused){
            this.startTimer();
        }
    }
    startTimer(){
        this.paused = false
        this.interval = setInterval(() =>{
            if(this.timeLeft>0){
                this.timeLeft--;
            } else{
                this.pauseTimer();
                //this.changeTime(30);
            }
        },1000)
    }

    changeTime(t){
        this.timeLeft=t;
    }

    pauseTimer(){
        this.paused = true;
        clearInterval(this.interval);
    }

}
