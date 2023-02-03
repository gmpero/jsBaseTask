/*
Проверка номера телефона на валидность. 
Передаем телефон функции и проверяем валидное оно или нет (возращаем тру или фолс). 
Такие номера должны быть валидными: 
89991112233, 
8 (999) 1112233, 
+7 (999) 111-22-33, 
+7 (999) 111 22 33. 
Т.е. телефон может начинаться как и с +7, так и с 8. код оператора, 
может быть в скобках и без, и с пробелами. 
Оставшиеся часть может быть с дефисами и пробелами
*/

function validationTel(numberTel){
    const re = new RegExp(/((\+7)|8)\s?(\(\d{3}\)|\d{3})(\s?)\d{3}(\s?|\-?)\d{2}(\s?|\-?)\d{2}(\,|\.)?$/gm)
    if(re.test(numberTel))
        return true;
    else
        return false;
}

console.log(validationTel("89991112233,"));
console.log(validationTel("8 (999) 1112233,"));
console.log(validationTel("+7 (999) 111-22-33,"));
console.log(validationTel("+7 (999) 111 22 33."));
console.log(validationTel("895367867108"));
console.log(validationTel("+7 999 111-22 33."));