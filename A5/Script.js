function Netn (Nets){
    var a = 96;
    var b = 108;
    var c = 89;
    var logic = ((a + b + c)/3);
    var messagen = ('Nets average score is' + logic);
    console.log(messagen);
}
  Netn();



function Knicks (knick) {
    let num1 = 88;
    let num2 = 91;
    let num3 = 110;
    var kns = ((num1+num2+num3)/3);
    var message = ('Knicks average score is' + kns);
    console.log(message);
}
Knicks();

if (Netn >= Knicks){
    console.log('Nets better than Knicks');
}
else{
    console.log('Knicks better than Nets');
}

function nums (s1, s2 ,s3){
    const result = (s1+s2+s3)/3;
    return result
}

function compare (){
    console.log(nums(97,112,101));
    console.log(nums(109,95,123));
}


if (compare >= 100){
    console.log('Knicks win');
}
else{
    console.log('otherwise Nets lose');
}

function Ns (){
    console.log(nums(97,112,101));
}

function KKS (){
    console.log(nums(109, 95, 106));
}

if (Ns() >= KKS()){
    console.log('no trophy');
}
else{
    console.log("draw");
}

function tip (b,t){
 const tips = (b+t);
 return tips
}
console.log(tip(275,41.25));