var bty = document.getElementById("yes").innerHTML


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function btyes(new_number){
    var new_number = getRandomInt(13)
    alert("your new number is" + new_number)
}
var a = getRandomInt(13)
var b = getRandomInt(13)
var final_number = a+b

bty.onclick = btyes;

