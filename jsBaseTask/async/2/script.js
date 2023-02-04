/*
Выводим от 1 до 10 через секунду каждый раз. Используя Promise. 
Ограничения - setTimeout и new Promise() мы можем вызывать только один раз 
для решения нашей задачи.
*/


let a = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve(go());
    },2000)
})

function go(){
    console.log("GO");
}

a.then(function(){
    console.log("Выполнено");
});

/* Решение задачи */



 