function calcAverage (a,b,c){
    return a+b+c/3;
}

function avgNets (){
    console.log('Data 1 Nets average is' + calcAverage(44,23,71));
    console.log('Data 2 Nets average is' + calcAverage(85,54,41));
}
function avgKnicks (){
    console.log('Data 1 Knicks average is' + calcAverage(65,54,49));
    console.log('Data 2 Knicks average is' + calcAverage(23,34,27));
}

avgNets();
avgKnicks();

function checkWinner (){
    if (calcAverage(44,23,71)>=calcAverage(64,54,49)){
        console.log("Nets win");
    }
    else{
        console.log("Knicks win");
    }
}

function checkWinnerdota2 (){
    if (calcAverage(85,54,41)>=calcAverage(23,34,27)){
        console.log("Nets win");
    }
    else{
        console.log("Knicks win");
    }
}

checkWinnerdota2();
checkWinner();


function BMI (mass , height){
    return  mass / (height * height);
}

function Lucas (){
    console.log('Lucas BMI is' + BMI(78,1.69));
}
function John (){
    console.log('Johns BMI is'+ BMI(92,1.95));
}
Lucas();
John();

function BMIcompare (){
    if((BMI(78,1.69)>=BMI(92,1.95))){
        console.log('Lucas has better BMI');
    }
    else{
        console.log('Johns has better BMI');
    }
}

BMIcompare();