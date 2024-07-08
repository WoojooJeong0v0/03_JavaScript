function solution() {
  let answer = 0;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers[1]);

  for(let i = 0 ; i < numbers.length ; i++){
      answer += numbers[i];
  }
  answer /= 10;

  alert(`numbers의 원소들 평균 값은 ${answer}입니다.`)
}
