//variables

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

//DOMs sueltos

var tot = document.getElementById("tot");
tot.innerHTML = "Total Number: " + totalUno
console.log(dnum + " & " + dnum2);


const tex = document.querySelector('#text');
tex.textContent = "your numbers are  "+ dnum +  " & " +dnum2;

//funciones
function print(palabra) {
  var p = console.log(palabra);
  return p;
}

function nothing(){
  return;
}

function yes(){
  if(totalUno>21){
    var lose = document.createElement("p");
    lose.innerHTML = "you lost"
    document.getElementById("div").appendChild(lose);
    document.getElementById("yes").addEventListener("click", () => {
      nothing();
    });
  }
  else{let dnum3 = num[Math.floor(Math.random()*num.length)];
    var n3 = document.createElement("p");
    n3.innerHTML = "new number is = "+ dnum3;
    document.getElementById("div").appendChild(n3);
    console.log("numero 3: "+dnum3)
    totalUno += dnum3
    console.log("nuevo total: " + totalUno)
    var tot = document.getElementById("tot");
    tot.innerHTML = "Total Number: " + totalUno
    if (totalUno>21){
      var lose = document.createElement("p");
      lose.innerHTML = "you lost"
      document.getElementById("div").appendChild(lose);
    }}
  

}

//botones para el usuario

document.getElementById("yes").addEventListener("click", () => {
  yes()
});

document.getElementById("no").addEventListener("click", () => {
  var no = document.createElement("p");
  no.innerHTML = "your final number is =" + totalUno
  document.getElementById("div").appendChild(no);
})



//computadora

var cnum = num[Math.floor(Math.random()*num.length)];
var cnum2 = num[Math.floor(Math.random()*num.length)];
var sumc = cnum + cnum2;

console.log("numeros compu " + cnum + " " + cnum2);

while(sumc<21){
  if (sumc >= 19){
    break;
  }
  else if(sumc>15){
    var a = new Array("yes", "yes", "yes", "no", "no")
    var aD = a[Math.floor(Math.random()*num.length)];
    
    if (aD == "yes" ){
      var cnum3 = num[Math.floor(Math.random()*num.length)];
    sumc += cnum3;
    }
    else{
      break
    }
  }
  else{
    var cnum3 = num[Math.floor(Math.random()*num.length)];
    sumc += cnum3;
  }
}

console.log("suma compu: " + sumc)

var com1 = document.getElementById("com1");
com1.innerHTML = "Computer's numbers are: # and "+ cnum
var com2 = document.getElementById("com2");

//finish games
document.getElementById("fg").addEventListener('click', () => {
  if (totalUno == 21 && sumc == 21){
    var bw = document.getElementById("div3");
    bw.innerHTML = "There's a tie"
  }
  else if(totalUno == 21){
    var bw = document.getElementById("div3");
    bw.innerHTML = "You win"
  }
  else if(sumc == 21){
    var bw = document.getElementById("div3");
    bw.innerHTML = "Computer wins"
  }
  else if(totalUno>21 && sumc>21){
    var bw = document.getElementById("div3");
    bw.innerHTML = "Both lose"
  }
  else if (totalUno>21){
    var bw = document.getElementById("div3");
    bw.innerHTML = "You lose"
  }
  else if (sumc>21){
    var bw = document.getElementById("div3");
    bw.innerHTML = "You win"
  }
  else if(totalUno>sumc){
    var bw = document.getElementById("div3");
    bw.innerHTML = "You win"
  }
  else if(sumc>totalUno){
    var bw = document.getElementById("div3");
    bw.innerHTML = "You lose"
  }
  var ct = document.getElementById("com2");
  ct.innerHTML= "Total Number: "+sumc
})