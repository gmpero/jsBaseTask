//   Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, 
//  если хотя бы один элемент нечетный, 
//  если все четные, то false.

const arr = [2, 4, 6, 8, 10, 11, 14, 16]

function trueIsOdd(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            return true;
        }
    }
    return false;
}

console.log(trueIsOdd(arr));