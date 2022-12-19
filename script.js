let cross = document.querySelector('.btnMenu')
let today = document.getElementById('today')
let tohours= document.getElementById('tohours')
let tominutes = document.getElementById('tominutes')
let tosek = document.getElementById('tosek')
cross.addEventListener('click', onOpen);
function onOpen(){
    nav.classList.toggle('active')
    cross.classList.toggle('openBtn')
}
let nav = document.querySelector('.nav')

function time(){
   let currentData=new Date()
console.log(currentData);

let dedline=new Date('2023.01.01');
let dist =dedline-currentData;
console.log(dist);

let day=Math.floor(dist/1000/60/60/24);
console.log(day);

let hours=Math.floor(dist/1000/60/60)%24;
console.log(hours);

let minuts=Math.floor(dist/1000/60)%60;
console.log(minuts);

let sek=Math.floor(dist/1000)%60;
console.log(sek); 

today.innerText=day;
tohours.innerText= hours < 10 ? '0' + hours : hours;
tominutes.innerText= minuts < 10 ? '0' + minuts : minuts;
tosek.innerText= sek < 10 ? '0' + sek : sek;

}
// console.log(time())

setInterval(time,1000)