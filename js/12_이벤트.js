/** 인라인 이벤트 모델 + this 확인 */
function check1(btn){
// 자바스크립트에서 this 를 바로 쓰면 문제가 생길 수 있음
// 매개변수 btn : 함수 호출 시 () 괄호 안에 작성된 check(this)가 대입됨
// btn === this === 이벤트가 발생한 요소(div.my-btn1)
  console.log(btn);

  //클릭된 요소(btn)에 작성된 내용이 숫자이면 1증가
  //아니면 0을 대입
  // NaN, isNaN(값), Number(값)
  /* 
  NaN : 숫자 아님
  isNaN : 숫자 아니면 true
  Number : 값을 숫자(넘버)타입으로 변환
  */

  // Number(btn.innerText) === NaN
  if( isNaN(Number(btn.innerText)) ){ //숫자가 아니면이라는 뜻
    btn.innerText = 0; } else{ btn.innerText++; }
    // ++ 증감연산자는 오로지 숫자Number 타입에만 가능!! 
    // 피연산자를 강제로 숫자 타입으로 바꿔서 연산을 수행한다
    // 피연산자가 숫자 형태의 문자열인 경우("123"), 강제로 바꿈

  }


/** 고전 이벤트 모델 확인 */

// id가 "test1a"인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1a");


/* 고전 이벤트 모델 작성법 

요소.이벤트리스너 = 이벤트 핸들러

*/

// 이 함수는 이름이 없어도 바로 대입이 되어서 괜찮다 
// function(){}: 익명함수 (이름이 없는 함수)
// 보통 이벤트 핸들러 작성 시 많이 사용된다
test1a.onclick = function(){

  // 고전 이벤트 모델에 있는 이벤트 핸들러 내에서 this : 클릭된 요소가 보여짐
  console.log(this);

  alert("확인 버튼 클릭됨");
} 


/** 고전 이벤트 모델 제거 */
const test1b = document.querySelector("#test1b");

test1b.onclick = function(){

  // null : 참조하는 것이 없다 -> 유사 의미 : 없다
  test1a.onclick = null;
  alert("확인 버튼 클릭 이벤트를 제거");
}


/** 고전 이벤트 모델 단점 확인 */
const test1c = document.querySelector("#test1c");

/* DOM 요소는 onclick, onchange 같은 이벤트 리스너가
필드(변수)로 하나씩 존재한다
== 변수는 마지막으로 대입된 값으로 덮어 씌워진다는 특징이 있다 */

// 첫 번째 대입
test1c.onclick = function(){
  test1c.style.backgroundColor = "skyblue";
};

// 두 번째 대입
test1c.onclick = function(){
  test1c.style.color = "green";
}


/** 표준 이벤트 모델 */
/* [작성법]

  - 요소에 이벤트 리스너를 추가하는 형식

  요소.addEventListener("이벤트종류", 이벤트핸들러);

  * 이벤트 종류 : click, change, submit, keydown . . . .
  * 이벤트 핸들러 : 감지 되었을 때 수행할 함수 
*/

const test2 = document.querySelector("#test2");

/* #test2 클릭 시 투명해지게 만들기 */
test2.addEventListener("click", function(){

  // 투명도를 1->0으로 0.05씩 감소
  

  // - JS는 inline style로 작성된 css값만 읽어올 수 있다
  // - JS는 inline style로만 css코드를 추가할 수 있다
  // DOM은 HTML만 대상이기 때문에 css 코드는 못 가져온다!!

  // 1) 현재 요소에 inline style로 작성된 투명도 얻어오기 (current 현재)
  let curr = test2.style.opacity;

  console.log("curr:" , curr); // 처음엔 빈칸으로 출력됨

  // 2) 처음 클릭한 경우
  if(curr === '') curr = 1;  // curr 에 1을 대입하겠다

  // 3) 투명도를 0.05 낮춰서 대입
  test2.style.opacity = curr - 0.05;

  // 4) 투명도가 음수가 되었을 때 다시 1로 변경
  if(test2.style.opacity < 0){
    test2.style.opacity = 1;
  }

});

/** #test2 클릭 시 숫자 증가 */
test2.addEventListener("click", function(){

  // test2 요소에 작성된 내용을 1 증가
  test2.innerText++;

});


// 배경색이 변해야 하는 요소
const result3 = document.querySelector("#result3");

// 버튼 모두 얻어오기 -> NodeList (유사 배열)
// 각각의 인덱스가 실제 HTML 버튼요소이다!!!!!!!!
// 버튼을 묶어서 저장한 배열 btns 는 요소가 아니다!!!!!!!!!
// 요소.addEventListener() 이기 때문에 요소에만 작동한다 
const btns = document.querySelectorAll(".btn-container3 > button");
// 클래스를 선택해야함 

// btns에 저장된 버튼 요소 하나씩 접근하기
// for문으로 요소를 꺼내옴!!
for(let i = 0 ; i < btns.length ; i ++){
  
  // 각 버튼 요소 클릭 시
  btns[i].addEventListener("click", function(){
    // 각 버튼에 작성된 내용 얻어오기
   const color = btns[i].innerText;

    // #result3의 배경색을 color 변수에 저장된 값으로 변경하겠다
    result3.style.backgroundColor = color;
  });
  
}