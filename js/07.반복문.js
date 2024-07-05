/*  [작성법]

    
    for([1]초기식 ; [2]조건식 ; [4]증감식){

      [3]조건식이 true인 경우 반복 수행할 코드;
    } */


/** 12345 출력 */
function check1(){
  
  // num이 1부터 시작해서 1씩 증가하다가 num값이 5이하가 아닌 순간 반복 종료
  for( let num = 1 ; num <= 5 ; num++){
    console.log(num);
  }
}


/** 1부터 10까지 1씩 증가하며 출력 */
function check2(){
for(let num= 1; num <= 10 ; num++){
  console.log(num);
}
}

/** 5부터 13까지 1씩 증가하며 출력 */
function check3(){
  for (let num = 5; num <=13 ; num++){
    console.log(num);
  }
}

/** 1부터 5까지 1씩 증가한 숫자를 한 줄로 출력하기 */
function check4(){
  
  let result= ''; // 결과 저장용 변수에 빈칸 (string); 리터럴 표기법

  for(let num = 1; num <= 5; num++){
    result += num; // result = result + num;
    // 문자열 + 문자열 = 문자열로 출력됨
  }

  console.log(result); // '12345'
}


/**1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */
function check5(){

  let sum = 0; // 더했을 때 영향이 없는 숫자 0을 대입

  for(let num = 1 ; num <=10; num++){
    sum += num;
  }

  console.log(sum); // 55
}


/**1부터 10까지 2씩 증가한 숫자들 출력하기 */
function check6(){

  // 증감식을 2씩 증가하도록 변경 (복합 대입 연산자 사용)
  for(let num = 1; num <=10; num += 2){
    console.log(num);
  }
}


/** 3부터 30까지 3의 배수만 출력하기 */
function check7(){
  for(let num = 3; num <=30; num += 3){
    console.log(num);
  }
}


/* if + for 같이 사용해야 함 */
/** 1부터 20까지 4의 배수만 출력하고 그 합계도 구하기 */
function check8(){

  let sum = 0;  // 합계 저장용 변수, for문 바깥쪽에 존재해야 하는 변수

  for(let num = 1; num <= 20; num++){
    if(num % 4 === 0) {
      sum += num; // 4의 배수만 합계 누적
    }
  }

  console.log("합계 : ", sum);
  // num % 4 === 0 이게 4의 배수인 경우
}


function check9(){

  //문서에서 입력된 요소를 받아 온다!!
  const start = document.getElementById("start9");
  const end = document.getElementById("end9");
  const multiple = document.getElementById("multiple9");

  // 얻어온 input요소에 작성된 값을 얻어와 숫자로 변환해서 저장

  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multiple.value);

  let sum = 0; // 합계 저장용 변수

  // 입력된 값의 범위 만큼 반복 
  for(let num = s; num <= e; num++ ){
    if(num % m === 0){ // 지정된 배수(m)가 맞을 경우 
      console.log(num);
      sum += num;
    }
  }
  console.log("합계 :" , sum);
}

/** 입력받은 단의 구구단 출력 */
function check10(){
  // 단이 입력되는 요소 얻어오기
  const input = document.getElementById("dan10");

  // 단이 입력되지 않은 경우
  if(input.value.length === 0){
    alert("단을 입력해 주세요.");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
  }

  // 단이 2~9 사이가 아닌 경우
  const dan = Number(input.value);
  if(dan < 2 || dan > 9){
    alert("2~9 사이 숫자를 입력해 주세요.")
    return;
  }

  // 구구단 출력
  for(let num = 1 ; num <= 9; num++){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

/** 10부터 1까지 1씩 감소하며 출력 */
function check11(){
  for(let num = 10 ; num >= 1 ; num--){
    console.log(num);
  }
}


/** 입력받은 단의 구구단 거꾸로 출력하기  */
function check12(){
  // 단이 입력되는 요소 얻어오기
  const input = document.getElementById("dan12");

  // 단이 입력되지 않은 경우
  if(input.value.length === 0){
    alert("단을 입력해 주세요.");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
  }

  // 단이 2~9 사이가 아닌 경우
  const dan = Number(input.value);
  if(dan < 2 || dan > 9){
    alert("2~9 사이 숫자를 입력해 주세요.")
    return;
  }

  // 구구단 출력
  for(let num = 9 ; num >= 1; num--){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}


/** 특정 배수마다 지정된 모양 출력하기 */
function check13(){
  const input = document.getElementById("input13")
  const output = document.getElementById("output13")
  const result = document.getElementById("result13")

  // 배수
  const multiple = Number(input.value);
  // 출력 모양 
  const shape = output.value;

  let str = ''; // 출력될 문자열을 저장할 변수, for문 위에 있어야 함

   for(let num=1; num <= 20; num++){
    // 현재 반복되는 숫자가 multiple의 배수인 경우 
    if(num % multiple === 0){
      // console.log(shape);
      str += `${shape} `;
    } else { // 배수가 아니면 현재 반복 숫자 출력
      // console.log(num);
      str += `${num} `; // 문자 + 문자는 이어지는 속성을 이용함
    }
    // num === 10 인 경우 줄을 변경 <br> 추가
      if (num=== 10) str += "<br>"; // 한 줄일 경우 {} 생략 가능
  }
  // 화면에 출력할 때 html 도 넣어서 해석해라
  result.innerHTML = str;
}


/** 다음 모양 출력하기 */
function check14(){
  // 각 행은 3번 반복
  // 1행마다 4번 반복
  
  for (let row = 1; row <= 3; row++){ //3회 반복이 중요, 3행이 반복됨
    // 1행마다 4번 반복하는 구문

    let str = ''; // 한 행에 출력될 문자열을 저장할 변수
    // 반복할 때마다 만들어지는 변수

    //1행마다 4번 반복
    for(let col = 1; col <= 4; col++){
      str += col;
    }

    // 안쪽 for문 반복 결과를 바깥 for에서 출력
    console.log(str);
    console.log("-----");
  }
}


/** 다음 모양 출력하기2 */
function check15(){
  // 각 행은 5번 반복
  // 1행마다 5번 반복
  
  for (let row = 0; row < 4; row++){ //4행 반복

    let str = ''; // 한 행에 출력될 문자열을 저장할 변수
    // 반복할 때마다 만들어지는 변수

    //1행마다 4번 반복
    for(let col = 0; col < 5; col++){ // 5열 반복
      str += (col +1);
    }

    // 안쪽 for문 반복 결과를 바깥 for에서 출력
    console.log(str);
    console.log("-----");
  }
}

/** 다음 모양 출력하기3 */
function check16(){
  // 각 행은 5번 반복
  // 1행마다 5번 반복
  
  for (let row = 0; row < 3; row++){ //3행 반복

    let str = ''; // 한 행에 출력될 문자열을 저장할 변수
    // 반복할 때마다 만들어지는 변수

    //1행마다 3번 반복
    for(let col = 6; col >= 1; col--){ // 6열 반복
      str += col;
    }

    // 안쪽 for문 반복 결과를 바깥 for에서 출력
    console.log(str);
    console.log("-----");
  }
}

/** 다음 모양 출력하기4 */
function check17(){
  for(let row=1; row <= 4; row++){
    let str='';
    for(let col=1; col <= row; col++){ // 각 행과 끝에 나오는 숫자 값이 같은 것을 이용하여 변수를 넣음
      str+=col;
    }
    console.log(str);
  }
}


/** 다음 모양 출력하기5 */
function check18(){
  for(let row=1; row <= 4; row++){
    let str='';
    for(let col=1; col <= row; col++){ // 각 행과 끝에 나오는 숫자 값이 같은 것을 이용하여 변수를 넣음
      str+='*'; // col이라는 숫자가 아니라 *이라는 문자열을 대입하여 누적
    }
    console.log(str);
  }
}


/** 다음 모양 출력하기6 */
function check19(){
  for(let row = 5; row >= 1; row--){
    let str='';
    for(let col=1; col <= row; col++){ // 각 행과 끝에 나오는 숫자 값이 같은 것을 이용하여 변수를 넣음
      str += col; // col이라는 숫자가 아니라 *이라는 문자열을 대입하여 누적
    }
    console.log(str);
  }
}


/** 1~30 정수 중 4의 배수 구하기 */
function check20(){

  let count = 0; // 4의 배수를 세기 위한 변수

  for(let num = 1 ; num <= 30 ; num++){
    if(num % 4 === 0){ // 4의 배수인 경우
      count++; // count 를 1씩 증가시킨다, (배수를 찾을 때마다)
    }
  }
  alert(`count : ${count}`); // 7 출력
}


/**1부터 100 사이의 정수 중 입력받은 값의 배수가 몇 개인지 구하기 */
function check21(){
  const input = document.getElementById("input21");
  const value = Number(input.value);
  let count = 0;

  for(let num = 1; num <= 100; num++){
    if(num % value === 0){ // 입력 받은 수의 배수인 경우
      count++;
    }
  }
  alert(`count : ${count}`);
}


/** count 를 이용해 다음 모양 출력하기 */
function check22(){

  let count = 1;

  // 3행 4열 2중  for문
  for(let row = 1; row <= 3; row++){
    let str='';
    for(let col = 1; col <= 4; col++)
    {

      str += count++; // count값 대입 후 1 증가

      // str += count; // count값 대입하고
      // count++;  // count를 1 증가해야 한다
    }
    console.log(str);
  }
}


/** while 사용하여 0입력될 때까지 값 누적 */
function check23(){
  let sum = 0; // 누적용 변수


  let value;
  // 입력된 숫자가 0이 아니면 반복해라
  while( (value = Number(prompt("숫자 입력"))) != 0 ){
    sum += value; // 누적
  }

  alert(`합계 : ${sum}`);
}

/** 메뉴 주문하기 */
function check24(){
  // 메뉴 가격 저장한 변수 선언
  const gimbap = 4000;
  const ramen = 4500;
  const donkkaseu = 9000;

  // 주문 개수를 카운트하는 변수
  let gimbapCount = 0; // 김밥 주문을 카운트하는 변수
  let ramenCount = 0;
  let donkkaseuCount = 0;

  // prompt에 입력된 값을 저장할 변수 역할
  let input; // 정의 되지 않은 undefined 상태의 변수

  // input이 undefined이기 때문에 while문 첫 반복은 무조건 수행된다
  while(input !== null){ // input이 null이 아니면 반복
    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null 반환
    // 취소 선택 시 while 다음 반복 수행을 안 해서 멈추게 됨!
    input = prompt("메뉴 번호 입력");

    // input 값에 따라서 알맞은 case 수행하겠다!!
    switch(input){
      case '1' : gimbapCount++; break;
      case '2' : ramenCount++; break;
      case '3' : donkkaseuCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요");
    }
  } // end While 문

  let html = ''; // 화면에 출력될 html 코드를 저장할 변수
  if(gimbapCount > 0){
    html += `<li>김밥(${gimbapCount}개) : ${gimbapCount * gimbap}원</li>`;
  }

  if(ramenCount > 0){
    html += `<li>라면(${ramenCount}개) : ${ramenCount * ramen}원</li>`;
  }

  if(donkkaseuCount > 0){
    html += `<li>돈까스(${donkkaseuCount}개) : ${donkkaseuCount * donkkaseu}원</li>`;
  }

  // 주문한 메뉴 합계
  let sum = (gimbapCount * gimbap) + (ramenCount * ramen) + (donkkaseuCount * donkkaseu);

  html += `<li>합계 : ${sum}원</li>`;

  // id 가 "result24"인 요소에 내용으로 html 변수 값 추가
  // HTML 태그 해석이 필요하다

  document.getElementById("result24").innerHTML = html;
   
}