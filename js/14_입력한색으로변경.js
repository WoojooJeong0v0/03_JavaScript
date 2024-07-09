/** 입력한 색으로 변경 */

// 화면에 존재하는 .box, .color-input 얻어와 변수에 저장
const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

// 클릭할 버튼 요소 얻어오기
const changeBtn = document.querySelector("#changeButton");

// 변경 버튼 클릭 시 
changeBtn.addEventListener("click", function(){

  //상태 선택자 :checked  -> 체크된 요소를 선택하겠다!!
  //선택 안 되면 null이 반환되는 중
  const checkBtn = document.querySelector("[name = opacity-btn]:checked");
  // "언제" 이 코드가 실행이 되면 좋겠는가 따져봐야 한다

  /* 체크된 radio 버튼을 찾아 얻어오는 코드를
  addEventListener() 안에 작성하는 이유
  
  - 밖에 작성 : 페이지 로딩 시점에 체크된 요소 찾기 -> 무조건 없음
  - 안에 작성 : changeBtn이 클릭된 시점에 체크된 요소 찾기 -> 있거나 없음

  해당 요소를 어느 시점에 찾고 싶은가를 많이 생각해둬야 함!!
  */

  let op;
  if(checkBtn === null) op = 1; //체크가 안 되어 있으면 1
  else op = checkBtn.value; //체크된 값
  

  /* input 관련 요소에 작성된 값 -> value
  나머지 요소(div, p, span 등)에 작서된 내용 -> innerText, innerHTML */
  
  for(let i = 0 ; i < boxList.length ; i++){
    // input에 작성된 값을 얻어와 같은 index 번째 box 요소의 배경색으로 대입
    boxList[i].style.backgroundColor = inputList[i].value;

    // 투명도 적용
    boxList[i].style.opacity = op;
  }
});