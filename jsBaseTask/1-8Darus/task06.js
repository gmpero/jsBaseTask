//Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток 
//(Доброе утро\день\вечер\ночи Иван)

function helloLog (yourName){
    let date = new Date();
    if (date.getHours() < 12 && date.getHours() > 6)
        console.log(`Доброе утро ${yourName}`);
    if (date.getHours() > 12 && date.getHours() < 18)
        console.log(`Добрый день ${yourName}`);
    if (date.getHours() > 18)
        console.log(`Добрый вечер ${yourName}`);
    if (date.getHours() > 0 && date.getHours() < 6)
        console.log(`Доброй ночи ${yourName}`);
}

helloLog("Апось");