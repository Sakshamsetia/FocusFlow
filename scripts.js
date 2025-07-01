// Clock code
function clock(){
    let Clock = new Date();
    let DayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let time = document.getElementById("time");
    time.innerHTML = `${Clock.getHours()}:${Clock.getMinutes().toString().padStart(2,'0')}:${Clock.getSeconds().toString().padStart(2,'0')}`;
    let date = document.getElementById('date');
    date.innerHTML = `${Clock.getDate().toString().padStart(2,'0')}-${(Clock.getMonth()+1).toString().padStart(2,'0')}-${Clock.getFullYear()}`;
    let day = document.getElementById('day');
    day.innerHTML = DayList[Clock.getDay()];
}
setInterval(clock,1000);

//Tab Switch Code
let tabArr = document.querySelectorAll('.tab');
let navArr = document.querySelectorAll('.navigate')

function switchTab(tab,target){
    let button = target.closest('.navigate');
    tabArr.forEach(item=>{
        item.classList.add('hidden');
    })
    tab.classList.remove('hidden');
    navArr.forEach(item=>{
        item.classList.remove('glow');
    })
    button.classList.add('glow');
}
document.getElementById('DashBoard-bu').addEventListener('click',(event) =>{
    switchTab(document.getElementById('DashBoard'),event.target);
})
document.getElementById('Tasks-bu').addEventListener('click',(event) =>{
    switchTab(document.getElementById('Tasks'),event.target);
})
document.getElementById('Timer-bu').addEventListener('click',(event) =>{
    switchTab(document.getElementById('Timer'),event.target);
})
document.getElementById('Notes-bu').addEventListener('click',(event) =>{
    switchTab(document.getElementById('Notes'),event.target);
})
document.getElementById('Play-bu').addEventListener('click',(event) =>{
    switchTab(document.getElementById('Play'),event.target);
})


// Timer Code
let timeDisplay = document.getElementById('reTime');
let timerState = document.getElementById('filler');

function Timer(min,sec){
    let cMin = min;
    let cSec = sec;
    let state = false;
    timerState.style.animationDuration = (60*min+sec).toString()+"s";
    function reset(){
        cMin = min;
        cSec = sec;
        if(min>0) timeDisplay.innerText = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
        else timeDisplay.innerText = `${sec}`;
        timerState.classList.remove('fill');
        void timerState.offsetWidth;
        timerState.style.animationDuration = (60*min+sec).toString()+"s";
        timerState.classList.add('fill');    
    }
    function updateTime(m,s){
        min = m;
        sec = s;
        timerState.style.animationDuration = (60*m+s).toString()+"s";
    }
    function change(){
        if(state){
            if(cMin>0){
                timeDisplay.innerText = `${cMin.toString().padStart(2,'0')}:${cSec.toString().padStart(2,'0')}`;
                if(cSec>0) cSec--;
                else{
                    cMin--;
                    cSec = 59;
                }
            }
            else{
                if(cSec >= 0){
                    timeDisplay.innerText = `${cSec}`;
                    cSec--;
                }
                else{ 
                    window.alert('Timer Completed');
                    stop();
                }
            }
        }
    }
    function start(){
        timerState.style.animationPlayState = 'running'
        state = true;
    }
    function stop(){
        timerState.style.animationPlayState = 'paused'
        state = false;
    }
    return {start,stop,reset,updateTime,change};
}
//Initializing Timwe
let timer = Timer(25,0);

document.getElementById("openTimeSetter").addEventListener('click', ()=>{
    document.getElementById('timeSetterModal').classList.remove('hidden');
})

document.querySelectorAll('.modal-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.getElementById('timeSetterModal').classList.add('hidden');
    });
})
document.getElementById('saveTime').addEventListener('click',()=>{
    let min = document.getElementById('minutesInput').value;
    let sec =  document.getElementById('secondsInput').value;
    timer.updateTime(min,sec);
    timer.reset();
    timer.stop();
})

document.getElementById('t-start').addEventListener('click', ()=>{
    timer.start();
})

document.getElementById('t-stop').addEventListener('click', ()=>{
    timer.stop();
})

document.getElementById('t-reset').addEventListener('click',()=>{
    timer.reset();
    timer.stop();
})

setInterval(()=>{
    timer.change();
},1000);
