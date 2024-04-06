/*
for(let i=0;i<=1000;i++){
  document.write(i+' ');
}

for(let i=10;0<=i;i--){
  document.write('あと'+i+'日'+'<br>');
}
*/
for(let i=1;i<=100;i++){
  if(i%3===0){
    document.write('Fizz');
    if(i%5===0){
      document.write('Buzz');
    }
  }else{
    if(i%5===0){
      document.write('Buzz');
    }else{
      document.write(i);
    }
  }
  if(0===i%15){
    document.write('<br>');
  }else{
    document.write('　');
  }
}