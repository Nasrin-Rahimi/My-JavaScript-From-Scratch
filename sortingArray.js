let unsortedArray = [5, 6, -1, 1, 3];

let sortedArray = [];

function findAndRemoveMin(array) {
    let min = array[0];
    let minIndex = 0;
    for(let i = 1; i < array.length; i++) {
        if(array[i] < min){
            min = array[i];
            minIndex = i;
        }
    }

    array.splice(minIndex, 1);
    return min;
}