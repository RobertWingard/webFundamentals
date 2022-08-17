// var favFoods = ['Calamar', 'Pho', 'Pizza', 'Sushi', 'Medium-rare steak', 'Tacos', 'Korean BBQ', 'Chipotle'];  //elements are the valuces in the array
//                  0        1       2        3             4               5

//print each and every value in thie array of favFoods

// for(var i = 0; i< favFoods.length; i++){
//     //if the current food item (favFoods[i]) is Sushi then print 'inflation doe'. otherwise yo ucan print the food item
//     if(favFoods[i] == 'Sushi'){
//                 console.log('Inflation doe for ' + favFoods[i])
//     }
//     else if(favFoods[i] == 'Chipotle'){
//         console.log('Great deal for that ' + favFoods[i])
//     }
//     else{
//     console.log(favFoods[i]);
//     }
// }


// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";
    
// if(isSunny) {
//   whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//   whatToBring += "a coat, ";
// }
// if(isRaining) {
//   whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";
    
// console.log(whatToBring);

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i = 0; i<numbers.length; i++){
    if(numbers[i] > 0){
        countPositives += 1;
    }
}

console.log("there are " + countPositives + " positive values");

