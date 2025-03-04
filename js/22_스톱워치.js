/** 스톱워치 */
// 스톱워치 관련 요소 모두 얻어오기

const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");


// index [0] : 분 / [1] : 초 / [2] : 1/100초
const timeList = document.querySelectorAll("#display > span"); // display 자식 span 전부

let count = 0; // 1/100초마다 1씩 증가한 값을 저장할 변수

// 추가 변수 선언 (클리어중)
let currentInterval; // startBtn을 눌렀을 때 반복되는 setInterval()을 저장할 용도의 변수
// 현재 반복되는 Interval을 여기에 저장하겠다 

// ------------------------------------------------

// startBtn 클릭 시 10ms마다 count 1 증가 + 화면 시간 변경
startBtn.addEventListener("click", ()=>{

  // 이전에 스타트 버튼이 클릭된 적이 있을 경우!!
  // 버튼에 작성된 내용이 "PAUSE"인 경우!!! 
  if(startBtn.innerText === "PAUSE"){
    clearInterval(currentInterval); // 이전 Interval을 종료 시킨다
    startBtn.innerText = "START"; // 버튼 내용을 다시 스타트로 변경해라


    recordBtn.disabled = true; // 레코드 버튼 비활성화해!

    // 이 자리에서 멈춰야 해!
    // 일시정지 상태가 유지되어야 하니까
    // 이벤트 핸들러를 여기서 종료 시켜서 아래 setInterval()을 수행 못하게 함
    return; // 일시정지 상태인 경우이기 때문
  }

  currentInterval = setInterval(()=>{
    count++; // count 를 1 증가
    
    output(); // 시계 화면 출력 함수 호출
  }, 10);

  // 스타트 버튼 클릭 시 PAUSE로 변경
  startBtn.innerText = "PAUSE"; // 시작됐다!!

  // 레코드 버튼 비활성화 -> 활성화 변경
  recordBtn.disabled = false // 비활성화 하지마! 활성화 해
});

/* 시계 화면 출력하는 함수 별도 제작 */
function output(){
 
  // 화면에 출력될 시간을 저장할 변수
  let minute = Math.floor( count / 100 / 60 ); 
  let second = Math.floor( count / 100 % 60 ); // 몫은 나누기로 함
  let ms  = count % 100; // 나머지는 %모듈로 
  // 변수를 미리 만들어 놓는다


  /* 0을 붙이는 함수 호출 */
  minute = attachZero(minute);
  second = attachZero(second);
  ms = attachZero(ms);


  // 화면 출력
  // minute 에 저장된 값과 화면에 출력된 분이 다를 경우 (1분이 증가했다)
  if(minute != timeList[0].innerText){ timeList[0].innerText = minute; }

  // second 에 저장된 값과 화면에 출력된 초가 다를 경우 (1초 증가했다)
  if(second != timeList[1].innerText){ timeList[1].innerText = second; }
  timeList[2].innerText = ms;
  
};


/** 0을 붙이는 함수
 * 전달 받은 수가 10미만인 경우 앞에 0 붙여서 반환
 */
function attachZero(num){
  if(num < 10) return "0" + num;
  return num;
}

// reset 버튼 클릭 되었을 때
// - 0.01초마다 반복되는 setInterval()을 멈춤
// - 화면에 출력된 시간을 00:00:00 으로 초기화

resetBtn.addEventListener("click", ()=>{
  /* [window.]clearInterval( setInterval()이 저장된 변수 )
      - 전달 인자에 작성된 setInterval() 을 멈춤 (지움)
    */
  clearInterval(currentInterval);
  
  count = 0;
  output();
  startBtn.innerText = "START"; // 버튼 내용을 다시 스타트로 변경해라

  // 기록된 시간들 모두 삭제
  recordContainer.innerHTML = '';

  recordBtn.disabled = true; // 레코드 버튼 비활성화해!
});

// --------------------------------------------

// RECORD 버튼 클릭 시 현재 출력되는 시간을 얻어와 li 태그로 만들어
// #recordContainer의 첫 번째 자식으로 추가

recordBtn.addEventListener("click", ()=>{

  // #display에 작성된 내용 얻어오기
  // console.log(display.innerHTML); // HTML 문서에 작성된 내용 그대로 얻어옴, 태그 주석 ㅇ
  // console.log(display.innerText); // 작성되어 있는 텍스트만 얻어옴, 태그 주석 ㄴ
  // console.log(display.textContent); // 텍스트를 얻어오는데 공백 문자도 가지고 옴

  /* li태그 생성 */
  const li = document.createElement("li");
  // 내용으로 현재 출력 시간 대입하겠다
  li.innerText = display.innerText;

  // #recordContainer의 첫 번째 자식으로 추가해라
  recordContainer.prepend(li);

});