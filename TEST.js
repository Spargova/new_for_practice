/*
ИТОГОВАЯ ТАСКА

Задание:
Дается некий массив чисел
Вывести в консоль его параметры. 
Интересует его длина,
количество четных и нечетных элементов, 
количество положительных и отрицательных элементов.
Максимальный и минимальный элементы

Цель:
- Написать код.
- Понять общую структуру кода.
- Использование базовых конструкций языка.

Порядок работы:
- Написать вспомогательные и основные функции (7 штук)
  1. Вывод любого массива в консоль
  2. Проверка четное ли число?
  3. Проверка положительное ли число?
  4. Поиск максимального числа
  5. Поиск минимального числа
  6. Вычисление интересующих параметров массива используя 2, 3, 4 и 5.
  7. Вывод этих параметров в консоль
- Создать тестовый массив чисел
- Проверить свой код на тестовом массиве
Note: Все делать как функции!!!

Пример выполнения кода:

Output:
Test array: 
 [
    5,   89, -4, 32,
  -56,    7, 43, -1,
    0, -777, 46, -7
]
 Length of array =   12
 Amount of even numbers =   5 
 Amount of odd numbers =   7 
 Amount of pos numbers =   7 
 Amount of neg numbers =   5 
 Value of max element =   89 
 Value of min element =   -777 

*/
function length(array){
  for(i=0; i<array.length; i++){
     if(i<array.length){
        i++
     }
    }
  }

function allEvenlength(array){
 let tmp=[];
  for(i=0; i<array.length; i++){
    if(array[i]%2==0){
      tmp.push(array[i]);
    }
  }
  return tmp.length;
}

function allOddLength(array){
  let tmp = [];
  for(i=0; i<array.length; i++){
    if(array[i]%2!=0){
      tmp.push(array[i]);
    }
  }
  return tmp.length;
}

function allPositivelength(array){
 let tmp=[]; 
  for(i=0; i<array.length; i++){
    if(array[i]>=0){
      tmp.push(array[i]); 
    }
  }
  return tmp.length;
}

function allNegativelength(array){
 let tmp=[]; 
  for(i=0; i<array.length; i++){
    if(array[i]<0){
      tmp.push(array[i]); 
    }
  }
  return tmp.length;
}

function minElement(array){
  let minimum = [0];
  for(i=0; i<array.length; i++){
    if(array[i]<minimum){
      minimum=array[i];
    }
  }
  return minimum;
}

function maxElement(array){
  let maximum = [0];
  for(i=0; i<array.length; i++){
    if(array[i]>maximum){
      maximum=array[i];
    }
  }
  return maximum;
}

let array = [ 5, 89, -4, 32, -56, 7, 43, -1, 0, -777, 46, -7];

console.log("Length of array is ---", array.length);
console.log("Length of all even element is ---", allEvenlength(array));
console.log("length of all odd elements is ---", allOddLength(array));
console.log("Length of all positive elements is ---", allPositivelength(array));
console.log("Length 0f all negative elements is ---", allNegativelength(array));
console.log("Minimal element of array is ---", minElement(array));
console.log("Maximal element of array is ---", maxElement(array));
