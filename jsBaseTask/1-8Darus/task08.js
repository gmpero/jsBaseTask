//Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение 
//(Иван имеет возраст 44 и он зрелый). 
//А также вызови внутри своей функции, функцию из прошлого задания


let statusQwo;
let age = 12;
let name = "Валера"


function logAgeStatus(i){ 
        if(i <= 17)
            statusQwo = "ребенок";
        if(i > 17 && i <= 30)
            statusQwo = "молодой";
        if(i > 30 && i <= 55)
            statusQwo = "зрелый";
        if(i > 55)
            statusQwo = "старый";

        return statusQwo;   
}


function logInfo(name, age){
    statusAge = logAgeStatus(age);

    console.log(`${name} имеет возраст ${age} и он ${statusQwo}`);
}

//console.log(logAgeStatus(1));
logInfo("Валера", 35);

