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


