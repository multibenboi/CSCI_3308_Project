import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
    secondsLeft: number = 0;
    modSecondsLeft: number=0;
    minutesLeft: number = 0;
    modMinutesLeft: number = 0;
    hoursLeft: number = 0;
    interval;
    paused: boolean = true;
    times:number[] = [60, 20, 55, 15, 10, 0];
    amount:number[] = [1,1,1,1,1,1];
    units:string[] = ["oz", "tsp", "oz", "g", "oz", "oz"];
    identity:string[]= ["hops", "gypsum", "hops", "irish moss", "hops", "hops"];
    step_idx:number=0;
    stepString:string="";
    recipe:string[]=[];

    math=Math;
    alc_act: number = 0;
    og_act: number = 0;
    fg_act: number = 0;
    alc_est: number = 0;
    og_est: number = 0;
    fg_est: number = 0;
    alc_est2: number = 0;
    ibu: number = 0;
    w_lme: number = 0;

    util: number[][] = [[0, 1.030, 1.040, 1.050, 1.060, 1.070, 1.080, 1.090, 1.100, 1.110, 1.120,],
    [5, 0.055, 0.050, 0.046, 0.042, 0.038, 0.035, 0.032, 0.029, 0.027, 0.025],
    [10, 0.100, 0.091, 0.084, 0.076, 0.070, 0.064, 0.058, 0.053, 0.049, 0.045],
    [15, 0.137, 0.125, 0.114, 0.105, 0.096, 0.087, 0.080, 0.073, 0.067, 0.061],
    [20, 0.167, 0.153, 0.140, 0.128, 0.117, 0.107, 0.098, 0.089, 0.081, 0.074],
    [25, 0.192, 0.175, 0.160, 0.147, 0.134, 0.122, 0.112, 0.102, 0.094, 0.085],
    [30, 0.212, 0.194, 0.177, 0.162, 0.148, 0.135, 0.124, 0.113, 0.103, 0.094],
    [35, 0.229, 0.209, 0.191, 0.175, 0.160, 0.146, 0.133, 0.122, 0.111, 0.102],
    [40, 0.242, 0.221, 0.202, 0.185, 0.169, 0.155, 0.141, 0.129, 0.118, 0.108],
    [45, 0.253, 0.232, 0.212, 0.194, 0.177, 0.162, 0.148, 0.135, 0.123, 0.113],
    [50, 0.263, 0.240, 0.219, 0.200, 0.183, 0.168, 0.153, 0.140, 0.128, 0.117],
    [55, 0.270, 0.247, 0.226, 0.206, 0.188, 0.172, 0.157, 0.144, 0.132, 0.120],
    [60, 0.276, 0.252, 0.231, 0.211, 0.193, 0.176, 0.161, 0.147, 0.135, 0.123],
    [70, 0.285, 0.261, 0.238, 0.218, 0.199, 0.182, 0.166, 0.152, 0.139, 0.127]];

    inter: number = 0;
    prev: number = 0;
    u: number = 0;


    ngOnInit() {
        this.buildRecipe();
    }


    startTimerIfPaused(){

        if (this.paused){
            this.startTimer();
        }
    }
    startTimer(){
        this.changeCurrStep();
        this.paused = false;
        this.interval = setInterval(() =>{
            if(this.secondsLeft>0){
                this.secondsLeft--;
                if(this.minutesLeft == this.times[this.step_idx+1]){
                    this.step_idx+=1;
                    this.changeCurrStep();
                }
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
                this.playAlert();
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

    changeTime2(h,m,s){
        console.log(s);
        console.log(m);
        console.log(h);
        this.secondsLeft=3600*(Number(h)) + 60*(Number(m)) + Number(s);
        this.modSecondsLeft=this.secondsLeft%60;
        this.minutesLeft=Math.floor(this.secondsLeft/60);
        this.modMinutesLeft=this.minutesLeft%60;
        this.hoursLeft=Math.floor(this.secondsLeft/3600);
    }
    pauseTimer(){
        this.paused = true;
        clearInterval(this.interval);
    }
    deleteRecipe(){

        this.times=[]
        this.units=[]
        this.identity=[]
        this.amount=[]
        this.buildRecipe()
        /*
        this.times.push(t)
        this.amount.push(a)
        this.units.push(u)
        this.identity.push(id)
        this.buildRecipe()
        */
        //console.log(this.recipe)
    }
    deleteStep(step){
        //console.log(step)
        //console.log(this.recipe)
        for (let i = 0; i < this.recipe.length; i++){
            if (this.recipe[i] == step){
                console.log(i)
                console.log(this.recipe[i])
                this.recipe.splice(i,1)
                console.log(this.recipe)
                this.times.splice(i,1)
                console.log(this.times)
                this.units.splice(i,1)
                console.log(this.units)
                this.amount.splice(i,1)
                console.log(this.amount)
                this.identity.splice(i,1)
                console.log(this.identity)
                break;
            }
        }
        this.buildRecipe()

        return;
    }
    addIngredient(t, a, u, id){
        //console.log(t)
        console.log(this.recipe);
        this.times.push(t)
        this.amount.push(a)
        this.units.push(u)
        this.identity.push(id)
        //console.log(this.times)
        this.buildRecipe()
        console.log(this.recipe);
    }
    playAlert(){
        var audio = new Audio();
        audio.src="assets/alarm.mp3"
        audio.load();
        audio.play();
    }

    buildStep(index){
        //var ret = (index + 1) + ". ";
        var ret = this.times[index].toString();
        //var ret=this.times[index].toString();
        ret += " minutes: ";
        ret += this.amount[index].toString() + " ";
        ret += this.units[index]+" of "+this.identity[index];
        ret += "        "
        return ret;
    }

    buildRecipe(){

        this.recipe=[]
        /*
        for(let i = 0; i < this.times.length; i++){
            this.recipe.push(this.buildStep(i));
        }
        */
        //console.log(this.recipe[0])

        let step_order:number[]=[0]

        for (let i = 1; i < this.times.length; i++){
            if (this.times[i] <= this.times[step_order[step_order.length-1]]){
                //step_order.push(i)
                step_order.splice(step_order.length,0,i)
            }
            else{
                for (let j = 0; j < step_order.length; j++){
                    if (this.times[i] > this.times[step_order[j]]){
                        step_order.splice(j, 0, i);
                        break;
                    }
                }
            }
        }

        /*
        for(let i = 1; i < this.times.length; i++){
            step_order.push(i);
        }
        */
        for(let i = 0; i < this.times.length; i++){
            this.recipe.push(this.buildStep(step_order[i]));
        }
        //console.log(this.recipe)
        //console.log(step_order[0])

    }

    changeCurrStep(){
        this.stepString=this.buildStep(this.step_idx);
        console.log(this.stepString);
    }




    ABV_act(OG, FG){
        console.log(OG<FG);
        if (OG<FG){
            alert('Original Gravity must be greater than Final Gravity');

        }
        else{
            this.alc_act = 131.25*(OG-FG);
        }
        return false;
      }

      IBU(W, A, V, T, OG){
        this.prev=0;
        this.inter=0;

        if (T==0){
            return false;
        }

        if (T>70 || T%5!=0){
            alert('Time must be multiple of 5 and less than 70')
        }



        for(let i = 0; i < 11; i++){
            if (OG==this.util[0][i]){
                this.prev=i;
                break;
            }

            if (OG<this.util[0][i]){
                this.inter=(OG-this.util[0][this.prev])/(this.util[0][i]-this.util[0][this.prev]);
                break;
            }
            this.prev=i;
        }

        for(let j = 0; j < this.util.length; j++){
            if (T==this.util[j][0]){
                this.u=this.util[j][this.prev]+this.inter*(this.util[j][this.prev +1]-this.util[j][this.prev]);
                break;
            }

        }

        this.ibu=this.u*W*A*1000/V;
        return false;
      }

      OG_est(W){
        this.og_est=1+0.0074*W
        return false;
      }

      FG_est(OG){
        this.fg_est=1+(OG-1)*0.26
        return false;
      }

      ABV_est(OG, FG){
        this.alc_est = 131.25*(OG-FG);
        return false;
      }

      ABV_est2(W, V){
        this.alc_est2 = 131.25*0.0074*0.74*W*5/V;
      }

      W_est(ABV, V){
        this.w_lme = ABV*V/3.593625;
      }
}
