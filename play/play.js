function carta(numero){
  this.numero = numero;
  
}

function randint(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(1+max-min)+min);
}

const as = 1;
const dos = 2;
const tres = 3;
const cuatro = 4;
const cinco = 5;
const seis = 6;
const siete = 7;
const ocho = 8;
const nueve = 9;
const diez = 10;
const joto = 10;
const reina = 10;
const rey = 10;

var num = new Array(as, dos, tres, cuatro, cinco, seis, siete, ocho ,nueve, diez, joto, reina, rey);

var dnum = num[Math.floor(Math.random()*num.length)];
var dnum2 = num[Math.floor(Math.random()*num.length)];

 var totalUno = dnum + dnum2;

console.log(dnum);
console.log(dnum2);

function nothing(){
  return;
}

function yes(){
  let dnum3 = num[Math.floor(Math.random()*num.length)];
  var n3 = document.createElement("p");
  n3.innerHTML = "new number is = "+ dnum3;
  document.getElementById("div").appendChild(n3);
  console.log(dnum3)
  totalUno += dnum3
  console.log(totalUno)
  if(totalUno>21){
    var lose = document.createElement("p");
    lose.innerHTML = "you lost"
    document.getElementById("div").appendChild(lose);
    document.getElementById("yes").addEventListener("click", () => {
      nothing();
    });
  }

}

const tex = document.querySelector('#text');
tex.textContent = "your numbers are  "+ dnum +  " & " +dnum2;



document.getElementById("yes").addEventListener("click", () => {
  yes()
});

document.getElementById("no").addEventListener("click", () => {
  var no = document.createElement("p");
  no.innerHTML = "your final number is =" + totalUno
  document.getElementById("div").appendChild(no);
})

document.getElementById("fg").addEventListener('click', () => {
  var nf = document.createElement("p");
  nf.innerHTML = "your final number is =" + totalUno
  document.getElementById("div").appendChild(nf);
})
