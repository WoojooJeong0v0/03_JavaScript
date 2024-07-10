const images = ["가위L.png", "가위R.png", "바위L.png", "바위R.png", "보L.png", "보R.png"];

const gameStart = document.querySelector(".start");

gameStart.addEventListener("click", function(){

  const userBtn0 = document.querySelector(".u-b-c"); // 유저가 누르는 가위 버튼
  const userBtn1 = document.querySelector(".u-b-r"); // 유저가 누르는 바위 버튼
  const userBtn2 = document.querySelector(".u-b-b"); // 유저가 누르는 보 버튼
  
  const win = document.querySelector("#win"); // 승무패 결과 중 승리 표시
  const tie = document.querySelector("#tie"); // 승무패 결과 중 무승부 표시
  const lose = document.querySelector("#lose"); // 승무패 결과 중 패배 표시

  const result = document.querySelectorAll(".result"); // 승패 표시
  const usSelec = document.querySelectorAll(".u-select"); // 유저가 고른 값 표시
  const comSelec = document.querySelectorAll(".c-select"); // 컴이 고른 값 표시

  let round = Number(prompt('게임 판수를 정하세요')); // 승부 판수
  // if(round.length === 0){
  //   alert(`숫자를 입력해 주세요.`);
  //   return;
  // } 반복문이 아니어서 안 되는 걸 수도 있다 

  /* 컴퓨터가 내는 가위바위보 확인 */
  let cValue = [];
  for(let i = 0 ; i < round ; i++){
    let cSelecRandom = Math.floor(Math.random() * 3);
    // let cValue[i]++; // 배열을 만들어서 거기에 랜덤숫자를 넣고 싶다
    cValue[i] = cSelecRandom;
  }
  
 /*  /* 사람이 내는 가위바위보에 따른 결과 
    userBtn0 = 0; // 가위
    userBtn1 = 1; // 바위
    userBtn2 = 2; // 보

    userBtn0.addEventListener("click", function(){

      

      if(userBtn0 < cValue[i]){

      }
    })  가위바위보를 배열에 넣고 싶다*/ 
  
  



})