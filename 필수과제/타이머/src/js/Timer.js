const timerHour = document.getElementById("hour"); //스코어 기록창-분
const timerMin = document.getElementById("min"); //스코어 기록창-분
const timerSec = document.getElementById("sec"); //스코어 기록창-분

const TIME = timerHour.value * 3600 + timerMin.value * 60 + timerSec.value;

const MIN = timerHour.value;
const SEC = timerMin.value;
const HOUR = timerSec.value;
function TIMER() {
    PlAYTIME = setInterval(function () {
        TIME = TIME - 1000; //1초씩 줄어듦
        HOUR = TIME / (3600 * 1000);
        MIN = TIME / (60 * 1000); //초를 분으로 나눠준다.

        if (SEC > 0) {
            //sec=60 에서 1씩 빼서 출력해준다.
            SEC = SEC - 1;
            timerHour.value = Math.floor(HOUR) + ":" + MIN; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
            timerMin.value = Math.floor(MIN) + ":" + SEC; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
        }
        if (SEC === 0) {
            // 0에서 -1을 하면 -59가 출력된다.
            // 그래서 0이 되면 바로 sec을 60으로 돌려주고 value에는 0을 출력하도록 해준다.
            SEC = 60;
            Timer.value = Math.floor(min) + ":" + "00";
            Timer.value = Math.floor(min) + ":" + "00";
        }
    }, 1000); //1초마다
}

// TIMER();
// setTimeout(function () {
//     clearInterval(PlAYTIME);
// }, 180000); //3분이 되면 타이머를 삭제한다.
