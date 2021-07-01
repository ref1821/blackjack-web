function carta(numero){
  this.numero = numero
  
}

function randint(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(1+max-min)+min);
}




const as = 1
const dos = 2
const tres = 3
const cuatro = 4
const cinco = 5
const seis = 6
const siete = 7
const ocho = 8
const nueve = 9
const diez = 10
const joto = 10
const reina = 10
const rey = 10

var num = new Array(as, dos, tres, cuatro, cinco, seis, siete, ocho ,nueve, diez, joto, reina, rey)


var dnum = num[Math.floor(Math.random()*num.length)]
var dnum2 = num[Math.floor(Math.random()*num.length)]

console.log(dnum)
console.log(dnum2)
document.write("your numbers are  "+ dnum +  "  " +dnum2)
