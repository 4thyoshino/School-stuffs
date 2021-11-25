const anis = {
    "Animals":

    [
    {
        "petID":4,
        "name": "Coco",
        "age": 4,
        "species": "pog",
        "color": "white",
        "hobby": "Running",
        "ownerID": 101,
    },
    {
        "petID": 2,
        "name": "Tea",
        "age": 7,
        "species": "Tofu",
        "color": "White",
        "hobby": "sleep",
        "ownerID": 102,
    }
]
};

function Hello(){
    var test = anis.Animals.length;
    var dogg = document.querySelector('.line').innerHTML = test.name + "<br>";
}