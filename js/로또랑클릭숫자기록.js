// 로또판에서 필요한 요소 얻어오기
const lottoMake = document.querySelector("#lottoMake");
const lottoBoard = document.querySelector(".lottoBoard");

lottoMake.addEventListener("click", function(){

  const number = [];

  for(let i = 0 ; i < 46 ; i++){
    let print = Number(number[i].value);
    console.log(print);
  }
});