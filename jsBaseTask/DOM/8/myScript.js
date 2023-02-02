main = document.getElementById('main');
squers = document.querySelectorAll('[class="square"]');
btn = document.querySelector('button')


btn.addEventListener('click', function(){
    let block = document.createElement('div');
    block.className = 'square';
    block.addEventListener('click', changeColor);
    main.append(block);
});

for(squer of squers){
    squer.addEventListener('click', changeColor);
}

function changeColor(){
    let blocks = document.querySelectorAll(".square.green")

    this.classList.toggle('green');
    
    for(let block of blocks){
        block.classList.remove("green");
    }
}
