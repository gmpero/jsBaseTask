let squers = document.querySelectorAll('[class="square"]')

for (let squer of squers){
    squer.addEventListener('click', changeColor)
}

function changeColor(){
    let redSquers = document.querySelectorAll(".green")
    this.classList.toggle("green");
    
    for(let redSquer of redSquers)
        redSquer.classList.remove("green");
}

const btn = document.querySelector("button");
const body = document.getElementById("main")

btn.addEventListener('click', function(){
    let block = document.createElement('div');
    block.className = 'square';
    block.addEventListener('click', changeColor);
    body.append(block);

});