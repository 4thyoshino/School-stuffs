let c = 23
let ctf = (23 - 32) * 5 / 9;
let mctf = ctf+'°C'
console.log(mctf)


let f = 23
let ftc = f * 9 / 5 + 32;
let mftc = ftc+ '°F'
console.log(mftc)

   console.log('Its getting colder! Lets cover the temperature here,'+ ftc+'°F'+'is' + ctf+'°C');

   

 
 

    function heatFood(weight, time, mode){
      
  
      const heat = (`Your food of ${weight} grams will be heated for ${time} seconds in ${mode} mode.`);

      return heat
  }
  
  heat(25, 60, "defrost");



  