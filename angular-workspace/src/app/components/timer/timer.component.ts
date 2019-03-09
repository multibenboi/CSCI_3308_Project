import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
    secondsLeft: number = 20;
    modSecondsLeft: number=20;
    minutesLeft: number = 0;
    modMinutesLeft: number = 0;
    hoursLeft: number = 0;
    interval;
    paused: boolean = true;


    startTimerIfPaused(){
        if (this.paused){
            this.startTimer();
        }
    }
    startTimer(){
        this.paused = false
        this.interval = setInterval(() =>{
            if(this.secondsLeft>0){
                this.secondsLeft--;
                this.modSecondsLeft=this.secondsLeft%60;
                if (this.secondsLeft%60==59){
                    this.minutesLeft--;
                    this.modMinutesLeft=this.minutesLeft%60;
                    if(this.minutesLeft%60==59){
                        this.hoursLeft--;
                    }
                }
            } else{
                this.pauseTimer();
                //this.changeTime(30);
            }
        },1000)
    }

    changeTime(t){
        this.secondsLeft=t;
        this.modSecondsLeft=this.secondsLeft%60;
        this.minutesLeft=Math.floor(this.secondsLeft/60);
        this.modMinutesLeft=this.minutesLeft%60;
        this.hoursLeft=Math.floor(this.secondsLeft/3600);
    }

    pauseTimer(){
        this.paused = true;
        clearInterval(this.interval);
    }

}
