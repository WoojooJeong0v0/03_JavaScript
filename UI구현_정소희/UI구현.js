
// 글자 색
const changeFontColor = document.querySelector(".font-color");
// 글자 크기
const changeFontSize = document.querySelector("#font-size");

// 박스 w/h
let changeBoxWidth = document.querySelector(".inputBox-w");
let changeBoxHeight = document.querySelector(".inputBox-h");

// 박스 배경색 선택
const changeBackColor = document.querySelector(".back-color");
// 박스 선택
const box = document.querySelector(".resultBox");

// 출력 문자열
let inputText = document.querySelector("#hello");
const resultText = document.querySelector("#text-result");

// 적용 버튼
const change = document.querySelector("#btn");

// 변경 버튼 클릭
change.addEventListener("click", function(){

  const checkRow = document.querySelector("[name = align-row]:checked");
  const checkCol = document.querySelector("[name = align-col]:checked");
  const checkWeight = document.querySelector("[name = weight]:checked");
 
  resultText.innerText = inputText.value;
  resultText.style.color = changeFontColor.value;

  box.style.backgroundColor = changeBackColor.value;
  resultText.style.fontSize = `${changeFontSize.value}px`;
  resultText.style.color = changeFontColor.value;

  if(changeBoxWidth.length !== 0) box.style.width = `${changeBoxWidth.value}px`;
  if(changeBoxHeight.length !== 0) box.style.height = `${changeBoxHeight.value}px`;
  if(changeBoxHeight.length !== 0) box.style.display = `${changeBoxHeight.value}px`;


  resultText.style.fontWeight = checkWeight.value;

  // box.style.display = flex;
  console.log(checkRow);
  console.log(checkRow.value);
  box.style.justifyContent = checkRow.value;
  box.style.alignItems = checkCol.value;

  // resultText.style.textAlign = chechRow.value;

  // resultText.style.left = `${checkRow}`
  
}
);
