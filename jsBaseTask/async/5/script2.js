const pr = new Promise((resolve, reject) => {
    const num = 3;
    setTimeout(()=>{
        resolve(num);
    }, 3000)
});

pr.then(
    num => new Promise((resolve, reject) => {
        console.log(num*num);
        setTimeout(()=>{
            resolve(num * num);
        },3000)
    })
).then(
    num => new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve (num*num);
        },3000)
    })
).then(
    num=>alert(num)
);