let btn = document.getElementById('btn');
let output = document.getElementById('message');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userinput').value;
    if (input == number){
        output.innerHTML = 'Thats correct, your number was ${number}'
    } else if (input < number){
        output.innerHTML = "Number too low!"
    };
    if (input > number){
        output.innerHTML = "Number too high!"
    }


});

