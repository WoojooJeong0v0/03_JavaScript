/** class를 이용한 요소 DOM 객체 접근 방법 */
function classTest(){

  /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나
    배열 전용 기능(메서드)를 제공하지 않음
  */

  // 클래스가 cls-test인 요소를 모두 얻어와 HTML Collection (유사배열) 형태로 얻어옴
  const divs = document.getElementsByClassName("cls-test");
  
  // 0부터 divs 길이 미만까지 반복
  for(let i = 0 ; i < divs.length ; i++){ // i == 0, 1, 2

    // 요소.innerText = "값"; // 요소 내용으로 "값" 대입
    // 요소.innerText;        // 요소 내용 얻어오기
    console.log(divs[i].innerText);

    // i 번째 요소의 배경색 변경
    divs[i].style.backgroundColor = divs[i].innerText;
  }
}

/** input 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2(){
  /* 
  input 요소에 입력된 값 얻어오는 방법
    -> input요소.value

    HTML 요소에서 얻어온 값의 자료형은 모두 string (문자열)

  합계 구하는 방법
    -> let sum = 0; 선언 후 누적 진행

  HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
    -> document.getElementsByClassName("class속성값")
      -> HTMLCollection (유사배열)형태로 반환
  */

  // 클래스가 cls-test2 인 요소를 모두 얻어옴 -> HTMLCollection 유사배열로 변환
  const numbers = document.getElementsByClassName("cls-test2");
  let sum = 0;

  for(let i = 0 ; i < numbers.length ; i ++){
    sum += Number(numbers[i].value); // divs[i] == input 요소 하나
  }

  alert(`합계 : ${sum}`);

}

/** 태그명으로 요소 접근하기 */
function tagNameTest(){
 
  /* document.getElementsByTagName("태그명") */
  const tagList = document.getElementsByTagName("li");
  // 요소 4개짜리 HTML Collection 배열 반환

  // i == 0, 1, 2, 3
  for(let i = 0 ; i < tagList.length ; i ++){
    // tagList[i] .innerText;
    // 작성된 내용인 색상을 불러오기

    // 글자색 변경
    tagList[i].style.color = tagList[i].innerText;

    //테투리 변경
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }
}

/** 네임으로 요소 접근하기 */
function nameTest(){
  /* document.getElementsByName("name 속성값")
    -> NodeList (유사배열) 반환  */

  // name 속성 값이 hobby인 요소를 모두 얻어와 저장 
  const hobbyList = document.getElementsByName("hobby");

  let str = '';  // 체크된 input의 value를 누적 
  let count = 0; // 체크된 input의 개수를 카운트 한다

  // i == 0, 1, 2, 3, 4, 5 (길이는 6, 마지막 인덱스는 5 (길이-1))
  for(let i = 0 ; i < hobbyList.length ; i++){
    /* 
    요소.checked -> checkbox, radio 타입 전용 속성 (쩜 체크드) 
    요소.checked = true;  -> 해당 요소 체크
    요소.checked = false; -> 해당 요소 체크 해제
    요소.checked; -> 체크 여부 반환 (체크가 되어있으면 true, 아니면 false)
    */

    // i번째 input 요소가 체크 되어 있을 경우
    if(hobbyList[i].checked === true){
      // console.log(hobbyList[i].value);
      str += `${hobbyList[i].value} `; // value 누적
      count++; // 체크가 된 경우에만 count1 증가 
    }
  }

  // const div = document.getElementsByClassName("name-div");
  // ㄴ 요소가 1개 밖에 없어도 배열 형태로 반환된다 (Element's' s가 들어가면 무조건 배열)

  //요소가 1개밖에 없음 == 0번 인덱스만 존재
  // 0번 인덱스만 별도 변수에 저장해서 사용한다
  const div = document.getElementsByClassName("name-div")[0];

  div.innerHTML = `${str} <br><br>선택된 취미 개수 : ${count}개`;
}


/** css 선택자로 요소 접근 */
function cssTest1(){
  // target-div 속성 값이 css-div인 요소 하나 선택
  // querySelector
  const container = document.querySelector('[target-div = css-div]');

  container.style.width = "400px";
  container.style.height = "200px";
  container.style.border = "1px solid orange";

  // target-div 속성 값이 css-div인 요소의 자식중 div 요소를 모두 선택해서 얻어옴
  const divs = document.querySelectorAll('[target-div = css-div] > div');
  // i == 0, 1
  for(let i = 0 ; i < divs.length ; i++){
    divs[i].style.height = "50%";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center";
    divs[i].style.alignItems = "center";
  }
  divs[0].style.backgroundColor = "pink";
  divs[1].style.backgroundColor = "skyblue";


  // divs 사용하지 말고 "test1"이 작성된 요소를 선택해 fontSize = "30px"; 로 변경
  const test1 = document.querySelector('[target-div = css-div] > div')
  // 자식 div들 중 첫 번째 요소만 선택했다

  test1.style.fontSize = "30px";
  
}


/** 카카오톡 채팅 만들기 */
function readValue(){
  // 채팅 출력되는 화면
  const bg = document.querySelector('#chattingBackground');
  
  // 채팅이 입력되는 input
  const input = document.querySelector('#userInput');

  /* 입력된 값이 없을 경우
    1) 진짜로 작성 안 함
    2) 작성된 내용이 모두 공백 문자다 (띄어쓰기, 탭, 엔터 등) white space
    
    문자열.trim() : trim 을 사용, 문자열 좌우 공백을 제거한다 (중간공백은 제거 안 함) */

  if(input.value.trim().length === 0){
    alert("채팅 내용을 입력해 주세요.");

    input.value = ''; // 입력된 공백을 제거, 전부 없앤 것 같은 효과
    input.focus(); // input에 다시 포커스 맞춤 (커서 활성화)

    return; // 얼리리턴, 함수를 즉시 종료하고 호출한 곳으로 돌아감
  }

  /* 입력된 값을 읽어와 채팅 화면에 누적 */
  bg.innerHTML += `<p><span>${input.value}</span></p>`; // 누적시키기 위해

  input.value = ''; // 이전 입력 내용 제거
  input.focus(); // input에 다시 포커스 맞춤

  //bg.scrollHeight : 스크롤되어 가려진 부분까지 포함한 전체 높이
  //bg.scrollTop : 스크롤 위쪽 부분의 현재 위치
  //bg.scrollTop = 값 : 스크롤 위쪽 부분을 "값" 부분으로 이동
  //               값이 스크롤 높이를 초과하면 제일 아래로 이동한다

  //채팅화면 제일 아래로 스크롤을 이동 시킨다
  bg.scrollTop = bg.scrollHeight;

}

/** #userInput 에서 키보드로 값 입력 중 "Enter" 입력이 감지되는 경우 readValue 함수 호출 */
document.querySelector('#userInput').addEventListener("keydown", function(e){
  // 콘솔에서 입력된 키 확인
  // console.log(e.key);

  if(e.key === "Enter"){
    readValue(); // 함수호출
  }
});
