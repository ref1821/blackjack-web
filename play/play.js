function carta(numero){
  this.numero = numero
  
}

function randint(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(1+max-min)+min);
}
var num1 = console.log(randint(1,10));
var num2 = console.log(randint(1,10));

string(num1)
string(num2)

total = "your numbers are: " + num1 + "and"+ num2
console.log(total)
document.querySelector('p').textContent= total