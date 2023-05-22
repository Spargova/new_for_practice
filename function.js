console.log("---***---***---***---");

// функция определения положительного или отрицательного числа.
function characteristicNumber(param){ // определить положительное или отрицательное число.

 if(param>0){
   console.log("positive");
 }
 else{
  console.log("negative");
 }

}
characteristicNumber(-4);

console.log("---***---***---***---");

let array = [5, 89, -4, 32, -56, 7, 43, -1 , 0, -777, 46, -7];

//функция вывода паследнего четного числа массива (первый вариант)
function even(array){
  let tmp=array[0];
  for(i=0; i<array.length; i++){
  if(array[i]%2==0){
    tmp = array[i];
  }
  }
return tmp;
}
console.log(even(array));

console.log("---***---***---***---");

// функция вывода первого четного числа массива
function firstEven(array){
let tmp = 0
  for(i=0; i<array.length; i++){
    if(array[i]%2==0){
     tmp=array[i];
     break;
    }
  }
  
  return tmp;
}
console.log("firstEven", firstEven(array));


console.log("---***---***---***---");

// функция вывода первого четного числа массива (вдосконалена)
function firstEvenRefactoring(array){
  for(i=0; i<array.length; i++){
    if(array[i]%2==0){
     return array[i];
    }
  }
}
console.log("firstEvenRefactoring", firstEvenRefactoring(array));


console.log("---***---***---***---");

//фунция вывода всех четных чисел массива
function allEven(array){
 let tmp=[]; // <-- этот массив отвечает за массив (все числа в массиве!)
  for(i=0; i<array.length; i++){
    if(array[i]%2==0){
      tmp.push(array[i]) 
    }
  }
  return tmp;
}
console.log("allEven", allEven(array));

console.log("---***---***---***---");


//функция вывода паследнего четного числа массива (второй вриант)
function lastEven(array){    
  for(i=array.length-1; i>=0; i--){
    if(array[i]%2==0){
      return array[i];
    }
  }
  
}
console.log("lastEven", lastEven(array));


