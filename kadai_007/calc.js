//ランダムな整数を代入
num = Math.floor(Math.random() * 101);
//出力確認
console.log(num);
//if
if ((num % 3)===0 && (num % 5)===0){
  console.log('3と5の倍数です');
}
else if ((num % 5)===0){
  console.log('5の倍数です');
}
else if ((num % 3)===0){
  console.log('3の倍数です');
}
else {
  console.log(num);
}