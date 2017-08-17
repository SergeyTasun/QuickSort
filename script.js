var arr = [5,80,8,9,7,5,1,23,44,4,4,4,4,4];
console.log(arr);

//функция замены, просто меняет местами i-й элемент массива и j-й элемент массива.
function permutationAar (i, j){
            var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
}

//функция берет средний элемент и сортрует массив относительно этого елемента, возвращает индекс этого "среднего" элемента.
 function IndexGroupSort(arr, left, right) {
 var centr = arr[parseInt((left + right) / 2)];  // centr - опорный элемент; 
 do {
   while(arr[left] < centr)
     {
      left++;
     } 
   while(arr[right] > centr)
     {
      right--;
     }
   if(left <= right){         
      permutationAar(left, right);
      left++; 
      right--;
   }
 } 
 while(left < right);
 return left; 
}

//функция быстрой сортировки, рекурсивная.
function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = IndexGroupSort(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

// first call
var result = quickSort(arr, 0, arr.length - 1);
console.log(arr);