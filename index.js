// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    debugger;
}; 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts); */

/*ATTEMPT 1
const array = [Bill, Ari, Arash, Katy];

function writeCards(array,event) {
    for (i = 0; i<array.length; i++) {
        event = Object.assign({[i]}, array);
        console.log(`Thank you, ${[i]}, for the wonderful ${event} gift!`); 
    }
} */

function writeCards(namesArray, event) {

    let thankYouCards = [];

    for (let i = 0; i<namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
 
}

console.log(writeCards(['Bill', 'Ari', 'Arash'], "Easter"));


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
};

console.log(countDown(10));