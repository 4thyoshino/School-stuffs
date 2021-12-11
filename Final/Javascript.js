let btn = document.getElementById('btn');
let output = document.getElementById('message');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userinput').value;
    if (input == number){
        $("#btn").click(function () { 
            $("#no1").hide();
            {
                $("#win").show();
            }
        
        });

    } else if (input < number){
        $("#btn").click(function () { 
            $("#no1").hide();
            {
                $("#Lose").show();
            }
        
        });
    };
    if (input > number) {
        $("#btn").click(function () { 
            $("#no1").hide();
            {
                $("#Lose").show();
            }
        
        });

    }


});

    






