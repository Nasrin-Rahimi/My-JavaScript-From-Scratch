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

