// Happy birthday to me

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
  

// Wrapped gifts
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);


// Christmas cards
function writeCards(names, eventName) {
    const messages = []
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful ${eventName} gift!`);
    }
    console.log(messages);
    return messages
}

writeCards(["Arya", "Otis", "Teddy"], 'Christmas')


// Countdown loop

function countDown(inputNumber) {
    let n = inputNumber;
    while (n >= 0) {
        console.log(n);
        n--
    }
}

countDown(16)