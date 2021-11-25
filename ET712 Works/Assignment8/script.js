const numbs = [2,8,32,128,512,2048];
numbs.push(512, 128, 32, 8);


var tipsA = [];
var BillA = [];

function total(bill) {

    var tip;
    var bills;
    if (bill < 50) {
      tip = bill * 0.2;
    } else if (bill >= 50 && bill <= 2000) {
      tip = bill * 0.4;
    } 
  
    tipsA.push(tip);
    bills = tip + bill;
    BillA.push(bills);
  
  }

  total(24);
  total(36);
  total(204);
  total(80);
  total(182);
  total(440);
  total(100);
  total(10);
  total(1008);
  total(48);



console.log(tipsA);
console.log(BillA);

var DOM = document.getElementById("DOM");

var bottom = document.getElementById("button")

var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
  }

 