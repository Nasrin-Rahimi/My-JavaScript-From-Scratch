let shoppingList = ['eggs', 'bread', 'milk', 'juice'];
let result;
console.log("Shopping List", shoppingList)

// add 'potato' to the end of shoppingList
shoppingList.push('potato');
console.log("'potato' added to the end of shoppingList",shoppingList)

//add 'tomato' to the beginning of shoppingList
shoppingList.unshift('tomato')
console.log("tomato added to the beginning of the shopping list", shoppingList)

//remove the last element from shoppingList
shoppingList.pop()
console.log("remove the last item of shopping list", shoppingList)

//remove the first element from shoppingList
shoppingList.shift()
console.log("remove the first item of shopping list", shoppingList)

//copy of shopping list
result = shoppingList.slice()

//remove the first element nondestructively(without changing shopping list)
result = shoppingList.slice(1)

//remove the last element nondestructively(without changing shopping list)
result = shoppingList.slice(0, shoppingList.length - 1)

//add garlic to the end of shopping list nondestructively
result = [...shoppingList, 'garlic']

//add onion to the beginning of the shopping list nondestructively
result = ['onion', ...shoppingList]

// console.log("shopping list",shoppingList)
// console.log("result", result)

//take the array of numbers stored in arr and return the string true if any 
//combination of numbers in the array (excluding the largest number) can be 
//added up to equal the largest number in the array

function arraAddition(arr) {
    arr = arr.sort(function(a, b) { a - b; });
    let greatest = arr.pop();

    function search(sum, index) {
        if(index > arr.length) {
            return false;
        }
        if(sum + arr[index] === greatest) {
            return true;
        }
        else if(sum + arr[index] < greatest) {
            return search(sum, index + 1) || search(sum + arr[index], index + 1);
        } else {
            return false;    
        }
    }

    return search(0, 0);
}


let arr = [1,7,5,5,16];
console.log("arrayAddition result is: ", arraAddition(arr));

//Have strArr which will contain 2 elements: the first element will represent
// a list of comma-separated numbers sorted in ascending order, the second 
//element will represent a second list of comma-separated numbers (also sorted). 
//Your goal is to return a comma-separated string containing the numbers that 
//occur in elements of strArr in sorted order. If there is no intersection, 
//return the string false.
//Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//Output: 1,4,13

function FindIntersection(strArr) {
    let resultStr = " ";
    let arr1, arr2;

    arr1 = strArr[0].split(',');
    arr2 = strArr[1].split(',');

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
         
          if (parseInt(arr1[i]) === parseInt(arr2[j])){
            resultStr += arr1[i] + ',';
             break;
          }
        }
      }
    
      if(resultStr != " ") {
        return resultStr.slice(0, -1); 
      } else {
        return false;
      }
    
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

//Given an integer array nums, move all the even integers at the beginning of
// the array followed by all the odd integers.

//Return any array that satisfies this condition.
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function(nums) {
    let sortArray = [];
    let currElement;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) {
            sortArray.push( nums[i]);
        }
    }

   for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 != 0) {
        sortArray.push( nums[i]);
    }
   }
    return sortArray;
};

//Binary Search
function binarySearchRecursive(arr, x, left, right) {
    if(left > right) {
        return false;
    }
    let mid = parseInt((right + left) / 2);
    if(arr[mid] == x) {
        return true;
    } else if (x < arr[mid]) {
        return binarySearchRecursive(arr, x, left, mid - 1);
    } else {
        return binarySearchRecursive(arr, x, mid + 1, right);
    }

}

function binarySearchIterative(arr, x) {
    let left = 0;
    let rigth = arr.length - 1;
    
    while (left <= rigth) {
        let mid = parseInt((left + rigth) / 2);
        //or mid = parseInt(left + ((rigth - left) / 2));

        if(x == arr[mid]) {
            return true;
        } else if(x < arr[mid]) {
            rigth = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

//define an array using array literal
let myArray = [10, 20, 30];
//define an array using array constructor

let myArray2 = new Array(10, 20, 30);


