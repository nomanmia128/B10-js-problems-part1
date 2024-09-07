
const biryaniKhor = ['Abul', 'Babul', 'Cabul', 'Abule', 'Cabule', 'Habule', 'Labule', 'Babule'];
const numbers = [5, 8, 3, 5, 34, 8, 11, 3];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
         }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);