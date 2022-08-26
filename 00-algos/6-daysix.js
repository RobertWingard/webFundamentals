// console.log(Math.floor(3.4));
// console.log(Math.ceil(3.9));


// console.log(Math.random()*10);
 //gives a random number between 0-1
// console.log((Math.random()*10) + 10)

// console.log(Math.floor(Math.random()*20)) 
//          Math.ceil


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "idk but we gotta put Drake on every hook",
];

function magic8ball(){
    console.log('please wait')
    let randomIndex = Math.floor(Math.random()*lifesAnswers.length);
    console.log(lifesAnswers[randomIndex]);
}

magic8ball()


