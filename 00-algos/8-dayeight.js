let nums = [23, 0 , 11, 32, 8];
let artist = [`Mariah Carey`, `Elvis`, `Nipsey`, `J cole`, `Taylor Swift`];

let mixedArr = [10, `word`, false];

let array2d = [
    [2,5,8,10], 
    [3,6,1,11], 
    [5,7,7,99]
]

// console.log(array2d[1][1])

// for(let i =0; i<array2d.length; i++){
//     for(let j =0; j<array2d[i].length; j++)
//     console.log(array2d[i][j])
// }


// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for(let i = 0; i<arr2d.length; i++){
        for(let j = 0; j<arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
    }    
}
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

