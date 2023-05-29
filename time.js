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


