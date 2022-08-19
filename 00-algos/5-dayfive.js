var fruit1 = "apples"
var fruit2 = "oranges"

//one way to swap is using a temp variable
// var temp = fruit2;
// fruit2 = fruit1;
// fruit1 = temp;


//destructure swap
[fruit1, fruit2] = [fruit2, fruit1];

// console.log('fruit 1 is', fruit1);
// console.log('fruit 2 is', fruit2);


// for(let i = 0; i<=12; i++){
//     console.log(i)
// }

// let i = 0
// while(i<=12){
//     console.log(i)
//     i++
// }

// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// let topArtists = ['Nipsey Hussle', 'Drake', 'Lupe', 'Ray Charles', 'Same Cooke', 'Elvis', 'Red Hot Chili Peppers'];

//updating topArtists at index 3 to equal 'Jamie Fox'
// topArtists[3] = 'Jamie Fox';



// function reverseArray(arr){
// left = 0
// var left = 0
//right = last index of the array -> calcualted by doing the array.length -1
// var right = arr.length -1
//whle left is less than right do this:
// while(left<right){
//     [arr[left],arr[right]] = [arr[right],arr[left]]  //swap index
//     left++;
//     right--;
// }
//0 swaps with 6
//1 swaps with 5
//2 swaps with 4
//3 swaps with 3



// console.log(arr)

// }


// reverseArray(topArtists);
// reverseArray([1,2,3,4,5,6,7])



// the modulo operator (%) will give us the remainder of dividing two numbers together

for(i = 0; i<100; i++){
    //if the numbers is divisible by 7, print 'seventh heaven INSTEAD of the number
    if(i%7 ===0){
        console.log('seventh heaven---> getting family fomo');
    }else{
    
    // otherwise print the number
    console.log(i)
}
}