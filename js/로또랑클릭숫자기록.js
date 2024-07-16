// 로또판에서 필요한 요소 얻어오기
const lottoMake = document.querySelector("#lottoMake");
const lottoBoard = document.querySelector(".lottoBoard");

lottoMake.addEventListener("click", function(){

  const number = [];
  let print = 0;

  for(let i = 1 ; i < 47 ; i++){
    number[i] = i;
    print = Number(number[i]);
    console.log(print);
  }
});