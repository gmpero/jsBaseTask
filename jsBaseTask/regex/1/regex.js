/*
Регулярные выражения!
. - любой одиночный символ
[ ] - любой из них, диапазоны
$ - конец строки
^ - начало строки
\ - экранирование
\d - любую цифру
\D - все что угодно, кроме цифр
\s - пробелы
\S - все кроме пробелов
\w - буква
\W - все кроме букв
\b - граница слова
\B - не границ

Квантификация
n{4} - искать n подряд 4 раза
n{4,6} - искать n от 4 до 6
* от нуля и выше
+ от 1 и выше
? - нуль или 1 раз
*/

// Задание
/*
Проверка URL на валидность. 
Передаем урл функции и проверяем валидное оно или нет (возращаем тру или фолс). 
Критерии: Урл должен начинаться с http:// иили https:// 
и заканчиваться на .php или .html. 
Например - http://site.ru/index.php - валидный, 
http://site.com - не валидный, 
site.ru/index.php - не валидный
*/

function validationLink(link)
{
    const re = new RegExp(/\bhttp:\/{2}\S+\.(php|html)\b/gm); 
    const reg = new RegExp(/\bhttp:\/{2}\S+\.(ru|com)\/\S+\.(php|html)\b/gm);
    if(reg.test(link))
        return true;
    else
        return false;
}

console.log(validationLink("http://site.ru/index.php"));
console.log(validationLink("http://site.com"));
console.log(validationLink("site.ru/index.php"));