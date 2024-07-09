
// 준비한 이미지 파일명을 저장할 배열
const images = ["1.webp", "2.webp", "3.jpg", "4.jpg"];


// 클래스가 key인 요소를 모두 얻어와 배열 형태로 저장
const keys = document.querySelectorAll(".key");
// Q W E R
// 0 1 2 3


/* 문서 전체에 keydown 이벤트 리스너 추가*/
document.addEventListener("keydown", function(e){
  // e : 이벤트 객체
  // e.key : 입력한 key
  // // console.log(e.key);

  let index; // 인덱스를 저장할 변수를 스위치문 위에 선언함

  // 문자열.toUpperCase() : 문자열을 대문자로 변환
  // 문자열.toLowerCase() : 문자열을 소문자로 변환


  switch(e.key.toLowerCase()){ // 입력키를 소문자로 변환
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }
  //  keys[index].style.backgroundColor = "pink";
  // 베경을 이미지로 지정
  keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;

  // 글자색 투명으로 변경
  // rgba (red, green, blue, alpha)
  // rgb 값은 0 ~ 255 / alpha(투명도) 0(투명) ~ (불투명)
  keys[index].style.color = "rgba(0, 0, 0, 0)";

});

/* 문서 전체에 key up 이벤트 리스너 추가 */
document.addEventListener("keyup", function(e){
  switch(e.key.toLowerCase()){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }
  // keys[index].style.backgroundColor = "white";
  
  // 배경이미지 제거
  keys[index].style.backgroundImage = "none";

  //글자색 검정으로
  keys[index].style.color = "rgba(0, 0, 0, 1)";

});


/* if(e.key === 'q'){
  keys[0].style.backgroundColor = "pink";
} else if(e.key === 'w'){
  keys[1].style.backgroundColor = "pink";
} 강사님 풀이1

/*
직접 작성하고 있던 코드
const divKey = document.querySelectorAll(".container-qwer > div");
  divKey.addEventListener("keydown", function(){ // 쿼리셀렉All로 불러올 경우 배열을 가져오기 때문에
  // [] 를 넣어서 해야 한다!! 
    if(e.key === "q"){
      divKey.style.backgroundColor = red;
    }
    }) */


/** 이미지가 마우스 따라다니게 만들기 */

// 숨겨놓은 이미지
const cursorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove", function(e){
  // console.log(e);
  // e.pageX : x(가로)방향 마우스 위치 (왼쪽에서 떨어진 px 반환)
  // e.pageY : y(세로)방향 마우스 위치 (위쪽에서 떨어진 px 반환)

  cursorImage.style.left = `${e.pageX +5}px`;
  cursorImage.style.top = `${e.pageY + 5}px`;
})
