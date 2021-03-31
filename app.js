
function clock(){

    const fulldate = new Date();
    let hours = fulldate.getHours();
    let minutes = fulldate.getMinutes();
    let  seconds = fulldate.getSeconds();

    document.getElementById('hour').innerHTML=hours+":";
    document.getElementById('minute').innerHTML=minutes+":";
    document.getElementById('second').innerHTML=seconds;


}




setInterval(clock, 100);