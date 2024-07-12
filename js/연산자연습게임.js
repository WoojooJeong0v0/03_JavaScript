// 전역변수 설정. 기본 스텟값
let walkStat = 0;
let hpStat = 10;
let strStat = 12;
let agiStat = 9;


// 미리 아이템 받아와야 할 것을 작성한다!!
// 문서 안의 일치하는 아이디를 가져 와라! 
const walk = document.getElementById("walk");
const hp = document.getElementById("hp");
const str = document.getElementById("str");
const agi = document.getElementById("agi");


// 함수 실행하기 전에 미리 불러오는 내용
// 브라우저야 전역변수 설정된 값을 처음부터 가지고 와!
walk.innerText = walkStat;
hp.innerText = hpStat;
str.innerText = strStat;
agi.innerText = agiStat;


function adventure(){

  let walking = ++walkStat;
  // let hpUp = hpStat += 3
  // let strUp = strStat += 2
  // let agiUp = agiStat += 1

 /*  
  사용하는 내용을 바꾸기로 하여 일단 기존 작성한 내용을 주석처리함
  let Number1 = "사과를 획득 했습니다. HP가 3 증가합니다."
  let Number2 = "무기 강화 아이템을 획득했습니다. 힘이 2 증가합니다."
  let Number3 = "민첩의 물약을 획득했습니다. 민첩이 1 증가합니다." */

  let randomNumber = Math.floor(Math.random() * 4);

  if(randomNumber === 1){
    let hpUp = hpStat += 3;
    hp.innerText = hpUp;
    alert(`체력 증진 사과를 얻었습니다.`);
  }
   else if(randomNumber === 2){
    let strUp = strStat += 2;
    str.innerText = strUp;
    alert(`무기 강화 아이템을 얻었습니다.`);
  }
   else if(randomNumber === 3){
    let agiUp = agiStat += 1;
    agi.innerText = agiUp;
    alert(`민첩의 물약을 얻었습니다.`);
  }
  else {
    alert(`아무것도 얻지 못했습니다.`) 
  }

  walk.innerText = walking;

}