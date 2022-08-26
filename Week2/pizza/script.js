// var taco1 = {
//     "tortilla": "soft corn tortilla",
//     "protein":  "tinga chicken",
//     "cheese":   "cotija cheese",
//     "toppings": ["lettuce", "pico de gallo", "guacamole"],
//     "tacoInfo": function() {
//         console.log("Tortilla: " + this.tortilla);
//         console.log("Protein:  " + this.protein);
//         console.log("Cheese:   " + this.cheese);
//         console.log("Toppings: " + this.toppings);
//     }
// }
    
// we can now still get all the delicious taco facts by
// taco1.tacoInfo(); // note tacoInfo still gets called like a function


// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

// console.log(toppings[3])

function randomPicker(cheese, crust, topping, sauce){
    let cheese_index = Math.floor((Math.random()*cheese.length));
    let crust_index = Math.floor((Math.random()*crust.length));
    let topping_index = Math.floor((Math.random()*topping.length));
    let sauce_index = Math.floor((Math.random()*sauce.length));
    // console.log(cheese[cheese_index],crust[crust_index],topping[topping_index],sauce[sauce_index]);
    let newPizza = []
    newPizza.push(cheese[cheese_index],crust[crust_index],topping[topping_index],sauce[sauce_index]);
    return newPizza;
}
let newPizza = randomPicker(cheeses, crustTypes, toppings, sauceTypes)
    console.log(newPizza)

    for(let i =0; i<newPizza.length; i++){
        if(i==0)
        console.log("[\n",newPizza[i],',')
        else if(i<newPizza.length-1)
        console.log(newPizza[i],",");
        else
        console.log(newPizza[i],"\n]")
    }






// function pizzaOven(crustType, sauceType, cheeses, toppings){
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza
// }    

// var p1 = pizzaOven(`deep dish`, `traditional`, [`mozzarella`], [`pepperoni`, `sausage`]);
// console.log(p1)
// var p2 = pizzaOven(`hand tossed`, `marinara`, [`mozzarella`, `feta`], [`mushrooms`, `olives`, `onions`]);
// console.log(p2)
// var p3 = pizzaOven(`none`, `white sauce`, [`feta`], [`mushrooms`,`onions`]);
// console.log(p3)
// var p4 = pizzaOven(`thin crust`, `spicy sauce`, [`feta`], [`mushrooms`,`onions`, `olives`]);
// console.log(p4)