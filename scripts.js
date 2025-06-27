// Clock code
function clock(){
    let Clock = new Date();
    let DayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let time = document.getElementById("time");
    time.innerHTML = `${Clock.getHours()}:${Clock.getMinutes().toString().padStart(2,'0')}:${Clock.getSeconds().toString().padStart(2,'0')}`;
    let date = document.getElementById('date');
    date.innerHTML = `${Clock.getDate().toString().padStart(2,'0')}-${Clock.getMonth().toString().padStart(2,'0')}-${Clock.getFullYear()}`;
    let day = document.getElementById('day');
    day.innerHTML = DayList[Clock.getDay()];
}
setInterval(clock,1000);

//Tab Switch Code
let tabArr = document.querySelectorAll('.tab');
let navArr = document.querySelectorAll('.navigate')

function switchTab(tab,target){
    console.log(target);
    tabArr.forEach(item=>{
        item.classList.add('hidden');
    })
    tab.classList.remove('hidden');
    navArr.forEach(item=>{
        item.classList.remove('glow');
    })
    target.classList.add('glow');
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