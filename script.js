const resetBtn = document.querySelector('.reset');
const startBtn = document.querySelector('.start');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds'); 
let running=false;
let timer=null;
startTimer = () => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if(!running){
        timer=setInterval(()=>{
        seconds++;
        if(seconds===60){
            minutes++;
            seconds=0;
        }
        if(minutes===60){
            hours++;
            minutes=0;
        }
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');

        
    },1000)
    running=true;
        startBtn.textContent='■ ';
    }else{
        clearInterval(timer);
        timer=null;
        running=false
        startBtn.textContent = "▶ ";
    }
    
}
resetTimer=()=>{
    clearInterval(timer);
    timer = null;
    running = false;
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
        startBtn.textContent = "▶ ";

}

startBtn.addEventListener("click",startTimer)

resetBtn.addEventListener("click",resetTimer)



