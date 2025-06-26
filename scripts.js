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