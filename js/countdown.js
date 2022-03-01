let date = new Date ('Dec 31 2022 00:00:00');

function counts(){
    let nowTime = new Date();

    let gap=date-nowTime;

    const countdownOver = () =>{                                  // если ожидаемая дата наступила
        document.querySelector('.countdown').innerText = 'The countdown is over';
        document.querySelector('.countdown__images').style.display = 'none';
    }

    let days = Math.floor(gap/1000/60/60/24);
    let hours = Math.floor(gap/1000/60/60)%24;
    let min = Math.floor(gap/1000/60)%60;
    let sec = Math.floor(gap/1000)%60;

    if(gap<0){
        countdownOver();
        return clearInterval(timerId)
    }

    document.querySelector('.day').innerText = days;
    document.querySelector('.hour').innerText = hours;
    document.querySelector('.min').innerText = min;
    document.querySelector('.sec').innerText = sec;


}
const timerId = setInterval(counts,1000);
