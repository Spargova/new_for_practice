
function length(array)
console.log("Length of array is ---", array.length);
 
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
  let minimum = array[0];
  for(i=0; i<array.length; i++){
    if(array[i]<minimum){
      minimum=array[i];
    }
  }
  return minimum;
}

function maxElement(array){
  let maximum = array[0];
  for(i=0; i<array.length; i++){
    if(array[i]>maximum){
      maximum=array[i];
    }
  }
  return maximum;
}

let array = [ 5, 89, -4, 32, -56, 7, 43, -1, 0, -777, 46, -7];


console.log("Length of all even element is ---", allEvenlength(array));
console.log("length of all odd elements is ---", allOddLength(array));
console.log("Length of all positive elements is ---", allPositivelength(array));
console.log("Length 0f all negative elements is ---", allNegativelength(array));
console.log("Minimal element of array is ---", minElement(array));
console.log("Maximal element of array is ---", maxElement(array));
