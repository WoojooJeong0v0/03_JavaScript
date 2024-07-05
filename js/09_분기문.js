/** break 확인 */
function check1(){
  // 1부터 10까지 1씩 증가하는 반복문
  // 단, 5를 출력한 후 멈춤

  for(let num = 1; num <= 10; num++){
    console.log(num);
    if(num === 5){
      break;
    }
  }
}

/** 무한반복멈추기 */
function check2(){
  let sum = 0; // 합계 저장하는 변수

  /* while 문은 괄호 내의 조건문이 true 일 때 반복을 수행하는데
  조건식에 true 를 작성하면 false가 되는 경우가 없음
  ㄴ 무한 반복이 실행됨 */

  // 무한반복하는 코드에는 break; 를 포함한 if 문을 작성해서
  // 종료조건을 만들어야만 한다!!!!!!!!! (위험해!!!!)
  while(true){
    //달려
    // if (빨간불) break;
    const value = prompt("숫자입력"); // 취소하면 null 나옴

    // 취소 클릭 시 반복 종료
    if(value === null) break;

    // 확인 클릭 시 sum에 입력한 숫자를 누적한다
    sum += Number(value);
  }
  alert("합계 : " + sum);
}

/** continue 확인 */
function check3(){
  // 1부터 20까지 1씩 증가하는 반복문
  // 단, 3의 배수는 건너뛰기

  for(let num = 1 ; num <= 20; num++){
    //3의 배수인 경우
    if(num % 3 === 0) continue;
    console.log(num);
  }
}


/** continue 확인2 + 중첩 반복문에서의 분기문 */
function check4(){
  // 123456789를 5줄 출력하는 코드 작성
  // 단, 1번 줄에서는 1 제외하기
  // 2번 줄에서는 2 제외, 3번 줄에서는 3 제외 ..

  for(let row = 1; row <= 5; row++){ // 행을 제어
    let str = ''; // 문자열 형태로 누적하기 위한 변수 선언

    for(let col = 1; col <= 9; col++){ // 열을 제어
      // row n번줄인 경우 같은 col n번 제외
      if(row === col) continue; // 가장 가까운, 감싸고있는 for 구문에만 영향을 끼침
      str += col; // 이어쓰기
    }
    console.log(str); // 한 줄 출력
  }

}


// -----------------------------------

/* UP & DOWN GAME */
function startGame(){
  // 맞혀야 하는 난수 생성
  const answer = Math.floor(Math.random()*200) + 1;

  // 테스트 후 삭제될 영역
  // console.log("정답 : ", answer);

  // -----------------------------------

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // -----------------------------------

  let str = "1부터 200 사이 숫자 입력"; // prompt에 출력할 문자열

  while(true){ // 맞힐 때까지 돌려야 하니까 일단 무한 반복
    // 숫자만 정상 입력한다고 가정
    let input = prompt(str);
    
    if(input === null){ // 취소 클릭 시
      alert("게임 포기");
      break;
    }

    /* 숫자 입력 후 확인 클릭 시 */
    const value = Number(input); // 입력 받은 값을 숫자로 변환


    /* 숫자를 잘못 입력한 경우 */
    // Nan (Not a Number : 숫자가 아니다)
    // isNan(값): 값이 Nan이면 true

    if (isNaN(value)) { // 숫자가 아닌 값을 입력할 경우
      alert("숫자만 입력해 주세요");
      continue;
    }


    if(value > 200 || value < 1) { 
      alert("1~200 사이 값만 작성해 주세요")
      continue; 
    }


    // 정답을 맞히기 위한 시도를 했기 때문에 count 증가
    count++;

    /* 정답인 경우 */
    if(value === answer){
      alert(`정답!!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }

    /* 정답이 아닌 경우 */
    if(value < answer) { // 작았다
      str = `${value} [UP] / 시도 횟수 : ${count}회`;
    } else { // 큰 경우
        str = `${value} [DOWN] / 시도 횟수 : ${count}회`;
       }
  }
}