/* .js 파일 내부를 <script></script> 태그 내부라고 생각 */

// 함수 선언 : 기능 만들 거야
function externalFn(){
  // 함수 정의 : 이런 기능이야, 이렇게 동작할 거야
  alert("External 확인 버튼이 클릭 되었습니다.");
  alert("이번엔 alert 두 번");
}

/* ------------------ JS 맛보기 */
// 버튼 클릭시 body 태그의 글자색, 배경색을 변경

// HTML 문서에서 body 태그 선택
const body = document.querySelector("body");

// 라이트모드 변경 함수(기능)
function lightMode(){
  // 함수 정의
  body.style.color = "black"; // body태그의 글자색을 black으로 설정
  body.style.backgroundColor = "white"; //body태그의 배경색을 white로 설정
}
// 다크모드 변경 함수(기능)
function darkMode(){
  // 함수 정의
  body.style.color = "white"; // body태그의 글자색을 white로 설정
  body.style.backgroundColor = "black"; //body태그의 배경색을 black으로 설정
}