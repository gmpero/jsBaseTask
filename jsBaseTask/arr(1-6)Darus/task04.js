//  НАписать функцию, которая принимает массив чисел, например [1,2,3,4,5] 
//  и функция возращает среднее арифметическое, (округлить результат до десятых)
const arr = [1,2,3,4,5,5];
function arithmeticMean(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }

    return (sum / arr.length).toFixed(1)
}

console.log(arithmeticMean(arr));