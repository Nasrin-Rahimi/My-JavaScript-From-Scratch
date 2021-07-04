let shoppingList = ['eggs', 'bread', 'milk', 'juice'];
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
