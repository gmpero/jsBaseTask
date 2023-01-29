//  Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, 
//  если все элементы четные, 
//  если бы хотя бы один элемент не четный, то false.

const arr = [2, 4, 6, 8, 10, 100, 120, 200, 250, 260, 231];

function trueReporting(arr){
    for(let i = 0; i < (arr.length); i++){
        if(arr[i] % 2 === 1)
            return false;
    }
    return true;
}

console.log(trueReporting(arr));