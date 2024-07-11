/** 매개 변수Parameter, 전달인자Argument 확인 */

const input1 = document.querySelector("#input1"); // css 선택자를 사용해서 가져옴!!
const btn1 = document.querySelector("#btn1"); 

// 전달 받은 값이 양수/음수/0 인지 구분해서 출력하는 함수 만들기
function testFn1( num ){ // num 은 매개변수
  let str;

  if( num === 0 ) str = "0";
  else if( num > 0 ) str = "양수";
  else str = "음수";

  alert(`${num}은 ${str}입니다.`);
}

// #btn1 버튼이 클릭되었을 때
btn1.addEventListener("click", function(){
  // #input1에 작성된 값 얻어오기
   const value = Number(input1.value);
  
  // 함수 호출
  testFn1(value);
})


/** 입력 받은 수 3개 합계 구하기 */
const btn2 = document.querySelector("#btn2");

function testFn2(num1, num2, num3){
  const sum = num1 + num2 + num3;
  alert(`합계 : ${sum}`);
}

btn2.addEventListener("click", function(){
  
  // 버튼 클릭 시점에 클래스가 input2인 요소 모두 얻어오기
  const inputs = document.querySelectorAll(".input2");
  // 유사배열 (Node List) 형태로 반환 된다

  const value1 = Number(inputs[0].value);
  const value2 = Number(inputs[1].value);
  const value3 = Number(inputs[2].value);

  testFn2(value1, value2, value3); // 함수 호출

});


/** 합계 구하기 배열 버전 
 * @param  arr : 전달 받은 숫자 배열 
*/
function testFn3( arr ){ // 매개 변수로 배열 하나만 받아오겠다

  let sum = 0;

  for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i] ;
  }

  alert(`합계 : ${sum}`);

}

// #btn3 클릭 시 testFn3 호출하는 코드
document.querySelector("#btn3").addEventListener("click", function(){

  // 클래스가 input2인 요소를 모두 얻어와 저장을 한다 (배열 형태로)
  const inputs = document.querySelectorAll(".input2");

  // 1) inputs 요소별로 값을 얻어와 숫자로 변환해 숫자 배열에 저장
                        // inputs 길이 만큼의 배열 하나 생성
  const numberArr = []; // new Array(inputs.legnth);

  // 2) inputs 각 index 요소의 값을 얻어오는 코드 (for)
  for(let i = 0 ; i < inputs.length ; i++){
    const num = Number(inputs[i].value);

    // 3) numberArr의 i 번째 인덱스 요소에 num을 저장한다!!
    numberArr[i] = num; // 입력된 값이 모두 numberArr에 저장된다!!
  }

  // 합계 구하는 함수 호출
  testFn3( numberArr );

});
// id가 btn3요소를 찾아서 이벤트 리스너 클릭하여 함수를 호출
// 범용성이 훨씬 좋다! 



/** 리턴 확인하기1 */

/** num의 x제곱을 반환하는 함수 */
function pow(num, x){

  let result = 1; // 곱하기 사용 할 때에는 1로 초기화를 진행한다!! (영향을 주지않는 1로 초기값)

  for(let i = 0 ; i < x ; i++){ // x번 반복
    result *= num; // result에 num값을 계속 곱해서 누적한다
  }

  // 현재 함수를 종료하고 result 값을 가지고 호출한 곳으로 돌아감
  return result;
}

/** 출력할 문자열을 반환하는 함수 */
function printStr(num){ // num을 받아와서
  return `결과 : ${num}`;
}

// #btn4 클릭 시 
document.querySelector("#btn4").addEventListener("click", function(){
  const num = Number(prompt("숫자 입력"));
  const x = Number(prompt("몇 제곱?"));

  alert ( printStr( pow(num, x) ) ); // 함수를 겹쳐서 사용!! 
});


/** 리턴 확인하기2 */
// 함수를 3개 만듬
/** stack 구조 */
function testFn5aaa(num){
  return testFn5bbb(num) * 2;
}
function testFn5bbb(num){
  return testFn5ccc(num) * 3;
}
function testFn5ccc(num){
  return num + 1;
}

document.querySelector("#btn5").addEventListener("click", function(){
  alert( testFn5aaa(3) );
})

/* STACK 구조

  - 자료 구조 중 하나

  - 한 쪽으로만 들어가고 한 쪽으로만 나오는 형태

  - 메모리에서 실행된 함수들을 저장하는 용도(listUp, 목록화)로 사용
  (함수 호출 구조는 stack 형식)

  -선입후출 후입선출 
  First In Last Out, FILO
  Last In, First Out, LIFO
 */


/** 익명함수 확인 */
const btn6 = document.querySelector("#btn6");


// 익명함수를 이벤트 핸들러로 많이 사용하는 이유
// -> 이벤트 핸들러는 이벤트가 감지되면 처리할 거다!
// -> 해당 이벤트(동작)에 대한 기능이 종속되어 있다
// 전용 기능인 경우가 많아 재사용하는 경우가 많지 않다
btn6.addEventListener("click", function(){ //익명 함수
  console.log("익명 함수 실행했다");

  // 변수 + 익명 함수
  // 변수는 함수도 저장할 수 있다!!!! (자료형: function)

  // 해당 익명 함수는 plusFn 지역 변수에 저장됨 : 해당 지역에서만 사용 가능한 함수
  const plusFn = function(a, b){ // 변수명이 함수명 역할을 해줌
    // 요즘 함수 정의 방법(트렌드), 사용하기도 좋다!
    // function 안 쓰는 게 트렌드
    return a + b; 
  }

  console.log(plusFn(1,2));
});

// 이름있는 함수 선언/정의 -> 여러 곳에서 재사용 가능한 특징!
function testFn6(){
  console.log("이름 있는 함수가 실행됐다");
}

// 함수명만 작성 -> 함수 코드가 그대로 반환됨
btn6.addEventListener("click", testFn6);


/** 매개변수/return으로 익명함수 전달 확인 */
const btn7 = document.querySelector("#btn7");

function testFn7( otherFn ){
  // otherFn : 전달 받은 함수 코드, 어떤 함수 코드가 통째로 전달될 예정!!

  return function(num){
    // otherFn():전달받은 함수를 실행시켰다 (호출) 
    return otherFn() + num; 
   }

}

btn7.addEventListener("click", function(){
 
 
  const resultFn = testFn7( function(){ return 10; })

  // testFn7()호출 결과로 받환 받은 함수
  /* function(num){
    // otherFn():전달받은 함수를 실행시켰다 (호출) 
    return otherFn() + num; 
   }
 */

  alert(resultFn(100));

});


/** 화살표 함수 */
const arrows = document.querySelectorAll(".arrow"); // 버튼 4개 배열로 받아옴

// 화살표 함수 기본 형태
arrows[0].addEventListener("click", () => {  // function 자리에
 
  // 익명(화살표)함수를 변수에 대입, 익명함수를 짧게 쓴다
  const sumFn = (a, b, c) => {
    return a + b + c;
  }

  alert( sumFn(10,20,30) );

});


// 매개변수가 한 개인 경우
arrows[1].addEventListener("click", () => {

  const testFn = num => { // 매개변수가 1개이면 ()소괄호 생략가능
    return 10 * num;
  }

  alert(testFn(99));

});


// 한 줄만 작성된 경우
arrows[2].addEventListener("click", () => {

  // 함수 정의 부분이 return 한 줄 --> {return} 중괄호, return 생략 가능
  const minusFn = (a,b) => a - b; 

  alert(minusFn(10,3)); // 7

  // 매개 변수 1개, 정의 내용 return 한 줄
  // const doubleFn = (num) => { return num * 2 };
  const doubleFn = num => num * 2;

  console.log(doubleFn(3)); // 6
  
});


// object를 return 하는 경우*/
arrows[3].addEventListener("click", () => {
    // JS객체 : { k:v, k:v, ... } key : value 가 반복
    // k(key) === 변수명 (객체)
    // 중괄호 안에서 선언 된 변수는 지역 안에서만 사용되니
    // v(value) === 값 (대입되는)

  // 정상 작성
  const objectFn = (name, age) => {
      return {"이름":name, "나이":age};
  };

  // 잘못 작성
  // const objectFn = (name, age) => {"이름":name, "나이":age};

  console.log(objectFn("홍길동", 25));

});


/** 즉시 실행 함수 */
(() => {
  console.log("[즉시 실행 함수 실행됨]");
  console.log("점심 맛나게 먹으세여");
})() 