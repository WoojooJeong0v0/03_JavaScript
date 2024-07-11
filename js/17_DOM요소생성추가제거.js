/** DOM요소 */

const standard = document.querySelector("#standard"); // 기준이 되는 박스
const btns = document.querySelectorAll(".btn"); // 버튼들

let count = 1; // 1씩 증가하면서 요소내용으로 추가
for(let i = 0 ; i < btns.length ; i++){
  btns[i].addEventListener("click", () => { // 모든 버튼에 클릭 이벤트 추가
    const str = btns[i].innerText; // 작성된 버튼의 내용을 가지고 옴
    // console.log(str); 제대로 찍히나 확인함

    switch(str){
      case "prepend" : 
        const span1 = document.createElement("span"); // span을 생성
        span1.innerText = count; // span 내용으로 count 추가했다 
        span1.style.backgroundColor = "skyblue";
        standard.prepend(span1); // #standard 첫 번째 자식으로 span1을 추가한다
      break;

      case "append" :
        const span2 = document.createElement("span"); // span을 생성
        span2.innerText = count;
        span2.style.backgroundColor = "lightsalmon";
        standard.append(span2); // #standard 마지막 자식으로 span2를 추가
      break;


      case "before" :
        const div1 = document.createElement("div"); // div 생성
        div1.innerText = count; // 내용으로 카운트 추가
        div1.style.backgroundColor = "navy"; // 배경색 추가
        div1.className = "box"; // box 라는 이름의 클래스를 추가
        standard.before(div1); // #standard 앞 쪽에 추가를 한다
      break;


      case "after" :
        const div2 = document.createElement("div");
        div2.innerText = count;
        div2.style.backgroundColor = "greenyellow";
        div2.className = "box";
        standard.after(div2);
      break;

      
      case "remove" :
        // .container 요소를 제거 하고 싶음
        document.querySelector(".container").remove();
      break;
    }
    
    count++; // count 1 증가
  });
}