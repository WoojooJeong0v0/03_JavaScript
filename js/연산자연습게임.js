// 전역변수 설정. 기본 스텟값
let walkStat = 0;
let hpStat = 10;
let strStat = 12;
let agiStat = 9;

const walk = document.getElementById("walk");
const hp = document.getElementById("hp");
const str = document.getElementById("str");
const agi = document.getElementById("agi");


function adventure(){

  let walking = ++walkStat;
  let hpUp = hpStat += 3
  let strUp = strStat += 2
  let agiUp = agiStat += 1

  walk.innerText = walking;
  hp.innerText = hpUp;
  str.innerText = strUp;
  agi.innerText = agiUp;
}