console.log(new Date());
console.log(new Date(2023, 4, 29));
console.log(new Date(2023, 4, 29, 11, 46, 10)); // формат JS
console.log(new Date("2023-05-29T11:46:10")); // международный формат для многих языков ( с нудлевым смещением по поясам)
console.log(new Date("2023-05-29T11:46:10Z")); // Z  в конце строки добавляет смещение по поясам
console.log(new Date(1685350413000)); // время в формате Unix Timestemp

console.log(Date.now ());// получим время Timestamp 
console.log(new Date());// вносим его в скобки
const date = new Date();
console.log(date);
console.dir(date); //dir показывает все функции которые содержатся в этом прототипе

//console.dir(date.getTime)
console.log(date.getSeconds()); // get - выводим время
console.log(date.getMinutes());// месяцы в JS начинаются с нуля
console.log(date.getHours());
console.log(date.getFullYear()); // функция getYear после 2000 года не работает и ее использовать нельзя
console.log(date.getDate()); //получить день

console.log(date.setMinutes()) // set -  меняем время

console.log(date.getHours()); //часы по местному времени
console.log(date.getUTCHours()); //часы в формате UTC (без смещения по поясам)

console.log(date.getTimezoneOffset()); // функция получения текущего часового пояса (в минутах)
console.log(date.getTimezoneOffset() / 60); // ... в часах
 
console.log(date.toDateString()) // выводит дату в читаемом формате
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString('en'));

console.log(date.toLocaleString('en-US'));
console.log(date.toLocaleString('en-GB'));


//решение 1
function getWeekDay (date) {
    const converted = new Date (date);
    const week = converted.getDay();
    if (week===0){
        return "Sunday"
    }
    else if (week===1){
        return "Monday"
    }
    else if (week===2){
        return "Tuesday"
    }
    else if(week===3){
        return "Wednesday"
    }
    else if(week===4){
        return "Thursday"
    }
    else if(week===5){
        return "Friday"
    }
    else if(week===6){
        return "Saturday"
    }
}
console.log(getWeekDay(new Date(2023, 04, 30)));
console.log(getWeekDay(Date.now()));


//решение 2
function getWeekDay02 (date) {
    const converted = new Date (date);
    const week = converted.getDay();
    switch (week){
       case 0: return "Sunday"
       case 1: return "Monday"
       case 2: return "Tuesday"
       case 3: return "Wednesday"
       case 4: return "Thursday"
       case 5: return "Friday"
       case 6: return "Saturday"
    }
}
console.log(getWeekDay02(new Date(3023, 04, 29)));
console.log(getWeekDay02(Date.now()));


//решение 3
const weekList = {
    0:"ВС",
    1:"ПН",
    2:"ВТ",
    3:"СР",
    4:"ЧТ",
    5:"ПТ",
    6:"СБ",
}

function getWeekDay03 (date) {
    const converted = new Date (date);
    const week = converted.getDay();

    return weekList[week];
}
console.log(getWeekDay02(new Date(3023, 04, 29)));
console.log(getWeekDay02(Date.now()));