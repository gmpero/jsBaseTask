//  Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, 
//  где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

const arr = [1,2,5,12,15,21,20,25,26,31,35,46,51,60];

function multipleFive(arr){
    const arrMultipleFive = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 5 === 0){
            arrMultipleFive.push(arr[i]);
        }
    }
    return arrMultipleFive;
}

console.log(multipleFive(arr));