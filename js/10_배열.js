/** 배열 선언 및 기초 사용법 */
function check1(){

  // 배열 선언

  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ['사과', '딸기', '바나나'];

  console.log(arr1, arr2, arr3, arr4);
  // 콤마로 확인하는 건 콘솔.로그에서만 사용 가능함!!

  /* 배열명.length : 배열의 길이를 뜻함 */
  console.log(arr1.length, arr2.length, arr3.length, arr4.length);

  /* 배열의 각 요소 접근 방법(index 이용) */
  // 배열명[index] -> index번째 요소에 저장된 값을 반환 받는다!!
  console.log('arr4[0] :', arr4[0]); // 사과
  console.log('arr4[1] :', arr4[1]); // 딸기
  console.log('arr4[2] :', arr4[2]); // 바나나
  console.log('arr4[3] :', arr4[3]); // undefined

  console.log(arr4.length);


  // 배열명[index] = 값; -> 해당 index번째 요소에 값 대입한다!! 
  arr2[0] = 123;
  arr2[1] = '덥다';
  arr2[2] = true;
  // JS 배열은 여러 자료형 저장 가능!!

  console.log("arr2 : ", arr2);


  // -------------------------------------------------------------

  /* JS 배열 특징 이용하기 */
  // 1. 길이 제한이 없다 -> 원하는 만큼 배열 요소를 추가할 수 있다

  arr1[0] = '가나다';
  arr1[1] = '라마바';
  arr1[2] = '사아자';
  console.log("값이 대입된 arr1 :" , arr1);

  // 2. 원하는 index에 값을 마음 대로 추가할 수 있다
  // -> 중간에 건너뛴 index요소는 빈칸으로 처리됨
  // 보통 이렇게 쓰지는 않음... 빈칸없이 씀!
  arr1[5] = '중간에 건너뜀';

}


/** 배열 X for문 확인 1 */
function check2(){
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];
  // weeks.length == 7
  // weeks의 마지막 인덱스 번호 6 == "weeks길이 -1" 한 것과 같다

  // index 는 정수로 이루어져 있음
  // - 1 을 작성하는 것보다 <= 에서 =를 빼는 편
  for(let i = 0; i < weeks.length ; i++ ){
    //  0부터 7미만(== 6이하)까지 1씩 증가하는 것
    console.log(weeks[i]);
  }
}


/** 배열 for문 확인 2 */
function check3(){
  /* 배열 요소에 순차적으로 값 초기화하기 */
  const arr = []; // 빈 배열 생성

  // 0~3 까지 1씩 증가
  for(let i = 0; i < 4 ; i++){
    arr[i] = prompt(`${i}번째 인덱스 요소 값 입력`);
  }

  console.log(arr);
}

/** 배열 for문 확인3 */
/* 
  prompt를 이용해서 숫자 5개 입력 받아서 배열에 저장한다
  저장된 값, 합계, 평균을 console에 출력하기

  예 ) 1, 2, 3, 4, 5 입력 시
  저장된 값 : [1, 2, 3, 4, 5]
  합계 : 15
  평균 : 3
*/

function check4(){
  const arr = new Array(5);
  let sum = 0; // 합계 저장용 변수

  //for문 작성 (0 ~ 4까지 1씩 증가)
  // arr.length 로 작성할 경우 유지보수에 좋다
  for(let i = 0 ; i < arr.length ; i++){
    arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자를 입력하세요`)) 
    // 입력 받은 값은 '문자열'이기 때문에 받자마자 '숫자'로 변환해야 함 
    // Number 타입으로 배열 요소에 저장

    sum += arr[i]
    // 합계 누적
  }

  console.log("저장된 값 : " , arr);
  console.log("합계 : " , sum);
  console.log("평균 : " , sum / arr.length);
}


/** 배열 for문 확인4 배열에 난수 저장 */
/* 배열에 0부터 배열 길이 미만의 난수 저장하기 */
function check5(){
  
  const leng = Number(prompt("생성할 난수 범위 지정"));

  const arr = [];

  for(let i = 0; i < leng ; i++){

    // 0이상 leng 미만의 난수 발생
    const randomNumber = Math.floor(Math.random() * leng);

    arr[i] = randomNumber;
  }

  console.log("결과 :" , arr);

}


/** 로또 번호 생성기 */
/* 1 ~ 45 사이 난수 6개 생성
  단, 중복 안됨, 오른차순 정렬 필요 == 자료 구조 활용 기초 */
function check6(){
  
  const lotto = []; // 난수 저장용 배열 생성


  /*  */
  for(let i = 0; i < 6 ; i++){

    // 1 ~ 45 사이 난수
    // 0 부터 45 미만이 생성되기 때문에 1씩 추가 해야 함
    const randomNumber = Math.floor(Math.random() * 45) + 1;

    // 일단 배열에 난수 대입
    lotto[i] = randomNumber;

    // 앞에 중복되는 숫자 있는지 확인
    for(let x = 0 ; x < i ; x++){
      // 중복 검사
      // i번째 저장하려는 값이 x번째(앞쪽)에 존재하는가?
      if(lotto[x] === lotto[i]){ // 중복 값이 존재한다면
        // -> 현재 index에 머물기
        // 난수를 저장하기 위한 index를 지정하는 i값을 1감소 시킴
        // i를 감소시키면 바깥쪽 for문 증감식 i++ 에 의해 다시 1이 증가
        // 결과적으로 i값의 변화가 없는 상태인 x
        i--;
        break; // 조금이라도 코드의 효율을 올림, 불필요한 중복 검사 멈춤
      }
    }
  }

  // sort 정렬
  // 배열 내 숫자 정렬 방법
  lotto.sort( function(a,b) {return a-b;} );
  // console.log(lotto);

  document.getElementById("result6").innerText = lotto;

}


/** 점심뽑기 */
function selectMenu(){

  // 점심 메뉴로 초기화된 배열 생성
  const menus = ["라면 + 김밥", "제육볶음", "돈까스", "샐러드", "된장찌개", "알밥", "국밥",
    "닭갈비", "콩국수", "KFC", "냉면", "돼지갈비", "피자"];

  // menus 배열에서 랜덤으로 하나 뽑아서 화면에 menuResult에 출력하기

  // 0부터 배열 길이 미만의 정수형 난수를 생성
  const randomMenu = Math.floor(Math.random() * menus.length);

  console.log(`${menus[randomMenu]}`);

  document.getElementById("menuResult").innerText = menus[randomMenu];

}

/** 2차원 배열 확인1 */
function check7(){
  // 2차원 배열 선언 및 초기화
  const arr = [
    [10, 20, 30, 40] ,  // 0행 arr[0]
    [50, 60, 70, 80] ,  // 1행 arr[1]
    [90, 100]           // 2행 arr[3]
  ];

  console.log("2차원 배열 arr의 길이(행의 개수 :" , arr.length);

  console.log("arr의 0번째 인덱스 길이 : " , arr[0].length);
  console.log("arr의 1번째 인덱스 길이 : " , arr[1].length);
  console.log("arr의 2번째 인덱스 길이 : " , arr[2].length);

  // arr의 모든 요소(행)에 for문을 이용해 접근하기
  for(let i = 0; i < arr.length ; i++){

    // console.log(arr[i]);

    let str = ""; // 문자열로 누적하고 싶을 때

    // arr[i] 요소에 저장된 배열의 모든 요소 접근하기
    for(let x = 0; x < arr[i].length ; x++){
      // arr[i].length : i 번째 요소 (배열)의 길이 //  4, 4, 2
      str += `(${arr[i][x]}) `
    }

    console.log(str); // 한줄 출력
  }
}

/** 2차원 배열확인2 난수로 채워넣기 */
function check8(){
  const arr = [];

  /* 4행, 4열짜리 2차원 배열에 0~99 사이 난수 배치 */


  // 난수를 2차원 배열에 대입
  for(let row = 0 ; row < 4 ; row++){ // 행 반복
    arr[row] = []; // 행을 생성
    for(let col = 0 ; col < 4 ; col++) { // 열 반복
      // 난수 생성
     const randomNumber = Math.floor(Math.random() * 100);

      // 2차원 배열에 대입
     arr[row][col] = randomNumber;
    }
  }

  //콘솔창 출력용 2중for문
  for(let row = 0; row < arr.length ; row++){
    let str = "";

    for(let col = 0; col < arr[row].length ; col++){
      str += `${arr[row][col]} `
    }

    console.log(str); // 한 줄 출력
  }

  console.log(arr);

  const search = Number(prompt('찾으려는 값 입력'));

  // 2차원 배열(arr) 내에서 입력 값 (search) 찾기
  for(let row = 0; row < arr.length ; row++){
    for(let col = 0; col < arr[row].length ; col++){ // 행의 길이만큼만
      // 2차원 배열 요소가 search와 같다면
      if(arr[row][col] === search){
        console.log(`${row}행 ${col}열에 ${search}가 존재합니다.`);
      }
    }
  }
}

/*  강사님 코드
function check8(){
  /* 4행 4열짜리 2차원 배열에 0~99 사이 난수 배치

  // 배열 생성
  const arr = [];

  for(let row=0 ; row<4 ; row++){ // 행 반복

    arr[row] = []; // 행 생성

    for(let col=0 ; col<4 ; col++){ // 열 반복

      // 난수 생성
      const randomNumber = Math.floor(Math.random() * 100);

      // 2차원 배열에 대입
      arr[row][col] = randomNumber;
    }
  }

  console.log(arr);

   */

