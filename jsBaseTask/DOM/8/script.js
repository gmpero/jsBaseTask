/*
    Вывести 4 красных квадрата, при клике на любой, он становиться зеленым, 
    при этом если есть уже зеленый квадрат, 
    то он становиться обратно красным и так можно кликать на любой квадрат, 
    он становиться зеленым, а старый зеленый квадрат обратно крассным и тд. 
    (Сделать задачу так, чтобы можно было добавить ещё хоть 100 квадратов 
    при этом скрипт не надо менять).
*/

squers = document.querySelectorAll('[class="square"]');

/*for(squer in squers){
    squreTime = squers[squer]
    squreTime.addEventListener('mouseover', function(){
        squers[squer].style.backgroundColor = "green";
    });
}
*/

for (squere of squers){
    
    squere.addEventListener('click', changeColor);
}

function changeColor(){
    
    let redBlocks = document.querySelectorAll('.square.green');
    this.classList.toggle('green');
    for (let block of redBlocks) {
    block.classList.remove('green');
  }
}