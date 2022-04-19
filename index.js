// document.getElementById('submit_entry_email').onclick = function(){
// }
// document.addEventListener('DOMContentLoaded', function() {
//     const deadline = new Date(2022, 12, 08);
//     let timerId = null;
//     function declensionNum(num, words) {
//       return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//     }
//     function countdownTimer() {
//       const diff = deadline - new Date();
//       if (diff <= 0) {
//         clearInterval(timerId);
//       }
//       const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//       const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//       const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//       const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//       $days.textContent = days < 10 ? '0' + days : days;
//       $hours.textContent = hours < 10 ? '0' + hours : hours;
//       $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//       $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//       $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//       $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//       $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//       $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//     }
//     const $days = document.querySelector('.timer__days');
//     const $hours = document.querySelector('.timer__hours');
//     const $minutes = document.querySelector('.timer__minutes');
//     const $seconds = document.querySelector('.timer__seconds');
//     countdownTimer();
//     timerId = setInterval(countdownTimer, 1000);
//   });
(function(){var _id="1461eaadb7ce0dc565bd440f670edc2c";while(document.getElementById("timer"+_id))_id=_id+"0";document.write("<div id='timer"+_id+"' style='min-width:560px;height:83px;'></div>");var _t=document.createElement("script");_t.src="//megatimer.ru/timer/timer.min.js?v=1";var _f=function(_k){var l=new MegaTimer(_id, {"view":[1,1,1,1],"type":{"currentType":"1","params":{"usertime":true,"tz":"3","utc":1651363200000}},"design":{"type":"plate","params":{"round":"8","background":"solid","background-color":"#FFFFFF1A","effect":"slide","space":"0","separator-margin":"14","number-font-family":{"family":"Roboto","link":"<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"},"number-font-size":"48","number-font-color":"#ffffff","padding":"16","separator-on":false,"separator-text":":","text-on":false,"text-font-family":{"family":"Roboto","link":"<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"},"text-font-size":"13.7","text-font-color":"#ffffff"}},"designId":2,"theme":"white","width":560,"height":83});if(_k!=null)l.run();};_t.onload=_f;_t.onreadystatechange=function(){if(_t.readyState=="loaded")_f(1);};var _h=document.head||document.getElementsByTagName("head")[0];_h.appendChild(_t);}).call(this);